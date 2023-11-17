from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

import requests
from bs4 import BeautifulSoup
from time import sleep
import os
from dotenv import load_dotenv
import json

# Create your views here.

@csrf_exempt
def index(request):
    if request.method == "POST":
        load_dotenv();
        headers = {
                'User-Agent': os.getenv("USER_AGENT"),
                'Accept-Language': 'en-US, en;q=0.5'
               }

        data=json.loads(request.body.decode())
        search_query = data["searchKey"].replace(' ', '+')
        #search_query = 'jacket'.replace(' ', '+')
        base_url = 'https://www.amazon.in/s?k={0}&page={page_no}'.format(search_query, page_no="1")

        response = requests.get(base_url, headers=headers)
        soup = BeautifulSoup(response.content, 'html.parser')
        product_details = []

        temp = soup.find_all("div", attrs={"data-uuid": True,
                                           "class": "sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20",
                                           "data-asin": True,
                                           "data-component-type": True,
                                           "data-index": True})
        for i in temp:
            product_details.append({
                "img": i.find("img", attrs={"src": True})["src"],
                "title": i.find("span", attrs={"class": "a-size-base-plus a-color-base"}).text.strip() if i.find("span", attrs={"class": "a-size-base-plus a-color-base"}) != None else "",
                "price": i.find("span", attrs={"class": "a-offscreen"}).text.strip() if i.find("span", attrs={"class": "a-offscreen"}) else "",
                "rating": i.find("span", attrs={"class": "a-icon-alt"}).text.strip() if i.find("span", attrs={"class": "a-icon-alt"}) != None else "",
                "desc": i.find("span", attrs={"class": "a-size-base-plus a-color-base a-text-normal"}).text.strip()
                })
        return HttpResponse(json.dumps(product_details))
    return HttpResponse("Not Authorized")


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
        base_url = 'https://www.amazon.in/s?k={0}&page={page_no}'.format(search_query, page_no="1")

        response = requests.get(base_url, headers=headers)
        soup = BeautifulSoup(response.content, 'html.parser')

        product_details = []
        temp = soup.find_all("div", attrs={"data-uuid": True,
                                           "data-asin": True,
                                           "data-component-type": True,
                                           "data-index": True})
        for i in temp:
            if(i["data-asin"] == ""): continue

            product_details.append({
                "img": i.find("img", attrs={"src": True})["src"] if i.find("img", attrs={"src": True}) != None else "",
                "title": i.find("span", attrs={"class": "a-size-base-plus a-color-base"}).text.strip() if i.find("span", attrs={"class": "a-size-base-plus a-color-base"}) != None else "",
                "price": i.find("span", attrs={"class": "a-offscreen"}).text.strip() if i.find("span", attrs={"class": "a-offscreen"}) else "",
                "rating": i.find("span", attrs={"class": "a-icon-alt"}).text.strip() if i.find("span", attrs={"class": "a-icon-alt"}) != None else "",
                "desc": i.find_all("h2")[-1].find("span").text.strip() if i.find_all("h2")[-1].find("span") != None else "",
                "ref" : "https://www.amazon.in/" + i.find("a", attrs={"class": "a-link-normal s-no-outline"})["href"] if i.find("a", attrs={"class": "a-link-normal s-no-outline"}) != None else ""
                })
        return HttpResponse(json.dumps(product_details))
    return HttpResponse("Not Authorized")

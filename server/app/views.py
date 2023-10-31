from django.shortcuts import render
from django.http import HttpResponse

import requests
from bs4 import BeautifulSoup
from time import sleep
import os
from dotenv import load_dotenv
import json

# Create your views here.

def index(request):
    load_dotenv();
    headers = {
            'User-Agent': os.getenv("USER_AGENT"),
            'Accept-Language': 'en-US, en;q=0.5'
           }
    search_query = 'jacket'.replace(' ', '+')
    base_url = 'https://www.amazon.in/s?k={value}&page={page_no}'.format(value="iphone15",page_no="1")

    # + '&page={0}'.format(0) || https://www.amazon.in/s?k=iphone15&page=2

    response = requests.get(base_url, headers=headers)
    soup = BeautifulSoup(response.content, 'html.parser')
    # product_names = soup.find_all('span',class_='a-size-medium a-color-base a-text-normal');
    # product_prices = soup.find_all('span',class_="a-offscreen");

    product_details = []

    temp = soup.find_all("div",class_="a-section a-spacing-small a-spacing-top-small")
    print(len(temp))
    for i in range(len(temp)):
        if temp[i].parent["class"][0] == "puisg-col-inner":
            product_name = temp[i].find('span', class_='a-size-medium a-color-base a-text-normal')
            product_price = temp[i].css.select_one(".a-price > .a-offscreen")

            new_product_detail = {"product_name": product_name.get_text(),"product_price": product_price.get_text()}
            product_details.append(new_product_detail.copy())



    # print(product_prices, len(product_prices), len(product_names)) ||  + " -> " + product_prices[i].get_text()

    print(("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"))
    # print(len(product_names))
    if product_details:
        for i in range(len(product_details)):
            print(product_details[i])

        # result[i] = result[i].attrs['href']
    # print(result[0])
    json_data = json.dumps(product_details)
    print(json_data)

    with open("text.json", "w") as file:
        file.write(json_data)


    return HttpResponse(product_details)

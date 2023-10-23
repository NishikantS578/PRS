from django.shortcuts import render
from django.http import HttpResponse

import requests
from bs4 import BeautifulSoup
from time import sleep
import os
from dotenv import load_dotenv

# Create your views here.

def index(request):
    load_dotenv();
    headers = {
            'User-Agent': os.getenv("USER_AGENT"),
            'Accept-Language': 'en-US, en;q=0.5'
           }
    search_query = 'jacket'.replace(' ', '+')
    base_url = 'https://www.amazon.com/s?k={0}'.format(search_query)

    response = requests.get(base_url + '&page={0}'.format(0), headers=headers)
    soup = BeautifulSoup(response.content, 'html.parser')
    result = soup.find_all('a',class_='a-link-normal s-no-outline');
    for i in range(len(result)):
        result[i] = result[i].attrs['href']
    print(result[0])
    return HttpResponse(result)

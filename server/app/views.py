from django.shortcuts import render
from django.http import HttpResponse

import requests
from bs4 import BeautifulSoup
from time import sleep
import os
from dotenv import load_dotenv

# Create your views here.

def index(request):
    result = "hello"
    return HttpResponse(result)

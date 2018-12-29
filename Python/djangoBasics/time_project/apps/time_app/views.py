from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from time import gmtime, strftime
from django.utils.crypto import get_random_string



def index(request):

    return render(request, "time_app/index.html")

def time_display(request):
    content ={
        'time': strftime("%Y-%m-%d %H:%M %p", gmtime())
    }
    return render(request, "time_app/index.html", content)
    
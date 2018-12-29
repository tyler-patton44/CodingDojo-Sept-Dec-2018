from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from time import gmtime, strftime
from django.utils.crypto import get_random_string



def index(request):
    return render(request, 'blogs/index.html')

def create(request):
    response = "Create a new blog"
    return HttpResponse(response)

def blog(request, number):
    response = "Blog ID: "+number
    return HttpResponse(response)

def edit(request, number):
    response = "Edit Blog ID:  "+number
    return HttpResponse(response)

def destroy(request, number):
    return redirect('/blogs')
    
from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from time import gmtime, strftime
from django.utils.crypto import get_random_string
import random
from .models import *

def index(request):
    if 'name' not in request.session:
        request.session['name'] = ""
    if 'desc' not in request.session:
        request.session['desc'] = ""
    context = {
        'courses': Course.objects.all()
    }
    return render(request, 'courseMaker/index.html', context)

def add(request):
    if request.method == "POST":
        request.session['name'] = request.POST['name']
        request.session['desc'] = request.POST['desc']

        errors = Course.objects.basic_validator(request.POST)
        if len(errors):
            for key, value in errors.items():
                messages.error(request, value)
                return redirect('/')
        else:
            Course.objects.create(name=request.POST['name'], desc=request.POST['desc'])
            return redirect('/')

def danger(request, id):
    context = {
        'course': Course.objects.get(id=id)
    }
    return render(request, 'courseMaker/danger.html', context)

def deleter(request, id):
    b = Course.objects.get(id=id)
    b.delete()
    return redirect('/')
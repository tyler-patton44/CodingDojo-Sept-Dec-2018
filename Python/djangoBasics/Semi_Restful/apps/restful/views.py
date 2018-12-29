from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from time import gmtime, strftime
from django.utils.crypto import get_random_string
import random
from .models import *

def index(request):
    context = {
        'users': User.objects.all()
    }
    return render(request, 'restful/index.html', context)

def create(request):
    if 'name' not in request.session:
        request.session['name'] = ""
    if 'email' not in request.session:
        request.session['email'] = ""

    return render(request, 'restful/create.html')

def add(request):
    if request.method == "POST":
        request.session['name'] = request.POST['name']
        request.session['email'] = request.POST['email']

        errors = User.objects.basic_validator(request.POST)
        if len(errors):
            for key, value in errors.items():
                messages.error(request, value)
                return redirect('/create')
        else:
            User.objects.create(name=request.POST['name'], email=request.POST['email'])
            return redirect('/')

def show(request, id):
    context = {
        'user': User.objects.get(id=id)
    }
    return render(request, 'restful/show.html', context)

def edit(request, id):
    context = {
        'user': User.objects.get(id=id)
    }
    return render(request, 'restful/edit.html', context)

def editor(request, id):
    if request.method == "POST":
        request.session['name'] = request.POST['name']
        request.session['email'] = request.POST['email']

        errors = User.objects.basic_validator(request.POST)
        if len(errors):
            for key, value in errors.items():
                messages.error(request, value)
                return redirect('/edit/'+id)
        else:
            b = User.objects.get(id=id)
            b.name = request.POST['name']
            b.email = request.POST['email']
            b.save()
            return redirect('/')


def deleter(request, id):
    b = User.objects.get(id=id)
    b.delete()
    return redirect('/')
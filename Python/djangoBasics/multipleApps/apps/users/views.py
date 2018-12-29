from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from time import gmtime, strftime
from django.utils.crypto import get_random_string

def index(request):
    if 'first' not in request.session:
        request.session['name'] = ""
    if 'last' not in request.session:
        request.session['last'] = ""
    if 'texta' not in request.session:
        request.session['texta'] = ""
    return render(request, 'users/index.html')

def result(request):
    if request.method == "POST":
        request.session['first'] = request.POST['first']
        request.session['last'] = request.POST['last']
        request.session['texta'] = request.POST['texta']

        print(request.POST['first'])
        print(request.POST['last'])
        print(request.POST['texta'])

        return redirect('/success')

def success(request):
    return render(request, 'users/results.html')



from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from time import gmtime, strftime
from django.utils.crypto import get_random_string

def index(request):
    if 'name' not in request.session:
        request.session['name'] = ""
    if 'location' not in request.session:
        request.session['location'] = ""
    if 'texta' not in request.session:
        request.session['texta'] = ""
    return render(request, 'survey_app/index.html')

def result(request):
    if request.method == "POST":
        request.session['name'] = request.POST['name']
        request.session['location'] = request.POST['location']
        request.session['texta'] = request.POST['texta']

        print(request.POST['name'])
        print(request.POST['location'])
        print(request.POST['texta'])

        return redirect('/success')

def success(request):
    return render(request, 'survey_app/results.html')



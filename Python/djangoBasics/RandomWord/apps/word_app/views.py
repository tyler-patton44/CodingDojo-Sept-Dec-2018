from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from time import gmtime, strftime
from django.utils.crypto import get_random_string
# Create your views here.

def index(request):
    if 'word' not in request.session:
        request.session['word'] = ""
    return render(request, 'word_app/index.html')

def random_w(request):
    if request.method == "GET":
        request.session['word'] = get_random_string(length = 12)
    return redirect('/')

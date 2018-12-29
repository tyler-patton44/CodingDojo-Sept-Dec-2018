from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from time import gmtime, strftime
from django.utils.crypto import get_random_string
# Create your views here.

def index(request):
    if 'words' not in request.session:
        request.session['words'] = []
    return render(request, 'words/index.html')


def add(request):
    if request.method == "POST":

        if 'big_font' in request.POST:
            show_font = '24pt'
        else:
            show_font = '12pt'
        templist = request.session['words']
        templist.append({"word": request.POST['word'], "color":request.POST['color'], "show_big":show_font, "time_stamp": strftime("%Y-%m-%d %H:%M %p", gmtime())})
        request.session['words'] = templist
        return redirect('/')
    else:
        return redirect('/')

def destroy(request):
    request.session.clear()
    return redirect('/')
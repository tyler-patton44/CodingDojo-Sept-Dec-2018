from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from time import gmtime, strftime
from django.utils.crypto import get_random_string
import random
# Create your views here.

def index(request):
    if 'total' not in request.session:
        request.session['total'] = 0
    if 'messages' not in request.session:
        request.session['messages'] = []
    return render(request, 'gold/index.html')

def money(request):
    time = strftime("%Y-%m-%d %H:%M %p", gmtime())
    if request.method == 'POST':
        if request.POST['hidden'] == 'house':
            cash = random.randrange(10,20)
            request.session['total'] = request.session['total']+cash
            message = "You found "+str(cash)+" at House congratulations. (Time"+str(time)+")"
            request.session['messages'].insert(0, message)
            return redirect('/')

        if request.POST['hidden'] == 'bed':
            cash = random.randrange(5,10)
            request.session['total'] = request.session['total']+cash
            message = "You found "+str(cash)+" in the Bed congratulations. (Time"+str(time)+")"
            request.session['messages'].insert(0, message)
            return redirect('/')

        if request.POST['hidden'] == 'car':
            cash = random.randrange(20,50)
            request.session['total'] = request.session['total']+cash
            message = "You found "+str(cash)+" at Car congratulations. (Time"+str(time)+")"
            request.session['messages'].insert(0, message)
            return redirect('/')

        if request.POST['hidden'] == 'casino':
            cash = random.randrange(50,100)
            chance = random.randrange(1,3)

            if chance == 1:
                request.session['total'] = request.session['total']+cash
                message = "You found "+str(cash)+" at Casino congratulations. (Time"+str(time)+")"
                request.session['messages'].insert(0, message)
                return redirect('/')

            if chance == 2:
                request.session['total'] = request.session['total']-cash
                message = "You lost "+str(cash)+" at Casino congratulations. (Time"+str(time)+")"
                request.session['messages'].insert(0, message)
                return redirect('/')
    else:
        return redirect('/')

def resetIt(request):
    request.session.clear()
    return redirect('/')

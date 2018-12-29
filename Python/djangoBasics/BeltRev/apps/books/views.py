from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from time import gmtime, strftime
from django.utils.crypto import get_random_string
import random
import bcrypt
from .models import *
from ..usersLogin.models import *

def index(request):
    if 'email_checker' not in request.session:
        return redirect('/')
    context = {
        'recent_reviews': Review.objects.all().order_by('-created_at')[:3],
        'writtings': Book.objects.all()
    }
    return render(request, 'books/index.html', context)

def reviews(request, book_id):
    if 'email_checker' not in request.session:
        return redirect('/')
    context = {
        'writtings': Book.objects.get(id = book_id),
        'reviews': Review.objects.filter(book = Book.objects.get(id=book_id))
    }
    return render(request, 'books/reviews.html', context)

def reviewBook(request):
    if request.method == 'POST':
        if 'email_checker' not in request.session:
            return redirect('/')
        if 'desc' not in request.session:
            request.session['desc'] = ""
        request.session['desc'] = request.POST['desc']
        bookid = request.POST['bookid']

        errors = Review.objects.reviewVal(request.POST)
        if len(errors):
            for key, value in errors.items():
                messages.error(request, value)
            return redirect('/books/reviews/'+request.POST['bookid'])
        else:
            user = User.objects.get(email_hash=request.session['email_checker'])
            Review.objects.create(user=user, book=Book.objects.get(id=request.POST['bookid']), content=request.POST['desc'], rating=request.POST['rating'])
            messages.success(request, "Review has been made")
            return redirect('/books/reviews/'+request.POST['bookid'])

def add(request):
    if 'email_checker' not in request.session:
        return redirect('/')
    return render(request, 'books/addBook.html')

def addBook(request):
    if request.method == 'POST':
        if 'email_checker' not in request.session:
            return redirect('/')
        if 'title' not in request.session:
            request.session['title'] = ""
        if 'author' not in request.session:
            request.session['author'] = ""
        if 'descr' not in request.session:
            request.session['descr'] = ""
        request.session['title'] = request.POST['title']
        request.session['author'] = request.POST['author']
        request.session['descr'] = request.POST['descr']

        errors = Book.objects.bookVal(request.POST)
        if len(errors):
            for key, value in errors.items():
                messages.error(request, value)
            return redirect('/books/add')
        else:
            Book.objects.create(title=request.POST['title'], author=request.POST['author'], desc=request.POST['descr'])
            messages.success(request, "Book has been posted")
            return redirect('/books')
def logout(request):
    request.session.clear()
    return redirect('/')


    
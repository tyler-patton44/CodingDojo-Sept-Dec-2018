from __future__ import unicode_literals
from django.db import models
from django.db.models import Q
import re
import bcrypt
from ..usersLogin.models import *
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
class BookManager(models.Manager):
    def bookVal(self, postData):
        errors = {}
        if len(postData['title']) < 1:
            errors['reg'] = "Title cannot be less than 1 characters"
        if len(postData['title']) > 100:
            errors['reg'] = "Title cannot be more than 100 characters"
        if len(postData['author']) < 5:
            errors['reg'] = "Author cannot be less than 5 characters"
        if len(postData['author']) > 100:
            errors['reg'] = "Author cannot be more than 100 characters"
        if len(postData['descr']) < 5:
            errors['reg'] = "Description cannot be less than 5 characters"
        if len(postData['descr']) > 100:
            errors['reg'] = "Description cannot be more than 100 characters"
        return errors

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    desc = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = BookManager()
    def __repr__(self):
        return "<Book {} {}>".format(self.title,self.author)

class ReviewManager(models.Manager):
    def reviewVal(self, postData):
        errors = {}
        if len(postData['desc']) < 5:
            errors['reg'] = "Review cannot be less than 5 characters"
        if len(postData['desc']) > 100:
            errors['reg'] = "Review cannot be more than 100 characters"
        return errors

class Review(models.Model):
    user = models.ForeignKey(User, related_name="reviewer")
    book = models.ForeignKey(Book, related_name="books")
    content = models.CharField(max_length=255)
    rating = models.FloatField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = ReviewManager()
    def __repr__(self):
        return "<Review {} {}>".format(self.content,self.rating)
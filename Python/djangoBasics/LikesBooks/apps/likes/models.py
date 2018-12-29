from __future__ import unicode_literals
from django.db import models


class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    def __repr__(self):
        return "<User {}, {}, {}>".format(self.first_name,self.last_name, self.email)

class Book(models.Model):
    name = models.CharField(max_length=255)
    desc = models.CharField(max_length=255)
    liked_users = models.ManyToManyField(User, related_name="liked_books")
    uploaders = models.ForeignKey(User, related_name='uploaded_books')
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    def __repr__(self):
        return "<Book {}, {}>".format(self.name,self.desc)
    
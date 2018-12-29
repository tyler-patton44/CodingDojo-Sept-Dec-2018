from __future__ import unicode_literals
from django.db import models
import re
import bcrypt
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
class UserManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if postData['name'].isalpha() != True:
            errors['name'] = "Invalid name"
        if len(postData['name']) == 0:
            errors['name'] = "Name cannot be blank"
        if len(postData['name']) > 100:
            errors['name'] = "Name cannot be more than 100 characters"
        if not EMAIL_REGEX.match(postData['email']):
            errors['email'] = "Invalid email"
        if len(postData['email']) == 0:
            errors['email'] = "Email cannot be blank"
        if len(postData['email']) > 250:
            errors['email'] = "Email cannot be more than 250 characters"
        return errors

class User(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = UserManager()
    def __repr__(self):
        return "<User {} {}>".format(self.name, self.email)



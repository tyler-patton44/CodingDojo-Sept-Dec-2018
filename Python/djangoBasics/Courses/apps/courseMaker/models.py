from __future__ import unicode_literals
from django.db import models
class CourseManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['name']) == 0:
            errors['name'] = "Name cannot be blank"
        if len(postData['name']) > 100:
            errors['name'] = "Name cannot be more than 100 characters"

        if len(postData['desc']) == 0:
            errors['name'] = "Description cannot be blank"
        if len(postData['desc']) > 100:
            errors['desc'] = "Description cannot be more than 100 characters"
        return errors

class Course(models.Model):
    name = models.CharField(max_length=255)
    desc = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = CourseManager()
    def __repr__(self):
        return "<User {} {}>".format(self.name, self.desc)



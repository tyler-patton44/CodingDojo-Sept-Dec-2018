from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'new$', views.create),
    url(r'(?P<number>\d+)$', views.blog),
    url(r'(?P<number>\d+)/edit$', views.edit),
    url(r'(?P<number>\d+)/delete$', views.destroy)
]
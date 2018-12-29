from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^create$', views.create),
    url(r'^add$', views.add),
    url(r'^show/(?P<id>\d+)$', views.show),
    url(r'^edit/(?P<id>\d+)$', views.edit),
    url(r'^editor/(?P<id>\d+)$', views.editor),
    url(r'^delete/(?P<id>\d+)$', views.deleter)
]
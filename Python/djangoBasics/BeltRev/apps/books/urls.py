from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'reviews/(?P<book_id>\d+)$', views.reviews),
    url(r'review_book$', views.reviewBook),
    url(r'add$', views.add),
    url(r'addBook$', views.addBook),
    url(r'logout$', views.logout)
]
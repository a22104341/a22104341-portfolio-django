from django.urls import path
from django.shortcuts import render
from . import views

app_name = 'portfolio'

urlpatterns = [
    path('', views.index_view),
    path('home', views.home_page_view, name='home'),
    path('index', views.index_view),
    path('products', views.products_view, name='products'),
    path('about', views.about_view, name='about'),
    path('contact', views.contact_view, name='contact'),
]
#  hello/urls.py

from django.shortcuts import render

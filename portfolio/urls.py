from django.urls import path
from django.shortcuts import render
from . import views

app_name = 'portfolio'

urlpatterns = [
    path('', views.index_view),
    path('index', views.index_view),
]
#hello/urls.py
from django.shortcuts import render
from django.shortcuts import render
from .models import Author, BlogOwner, Blog, Area, Article, Comment, Like
# Create your views here.
#  hello/views.py

from django.shortcuts import render


def home_page_view(request):
    return render(request, 'portfolio/home.html')

# Create your views here.
#  hello/views.py
from django.shortcuts import render, redirect
from .forms import AuthorForm, ArticleForm
from .models import Article


def home_page_view(request):
    return render(request, 'portfolio/home.html')


def video_page_view(request):
    return render(request, 'portfolio/video.html')


def blog_page_view(request):
    context={"articles":Article.objects.all()}
    return render(request, 'portfolio/blog.html', context)


def author_register_page_view(request):
    form = AuthorForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('portfolio:blog')
    context = {'form': form}
    return render(request, 'portfolio/register-author.html', context)


def article_create_page_view(request):
    form = ArticleForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('portfolio:blog')
    context = {'form': form}
    return render(request, 'portfolio/create-article.html', context)



# Create your views here.
#  hello/views.py
from django.shortcuts import render, redirect
from .forms import AuthorForm, ArticleForm
from .models import Article


def home_page_view(request):
    return render(request, 'portfolio/index.html')


def video_page_view(request):
    return render(request, 'portfolio/video.html')


def education_create_page_view(request):
    return render(request, 'portfolio/Education.html')


def interesting_create_page_view(request):
    return render(request, 'portfolio/Interesting.html')


def javaScriptPlayground_create_page_view(request):
    return render(request, 'portfolio/JavaScriptPlayground.html')


def Personal_create_page_view(request):
    return render(request, 'portfolio/Personal.html')


def ProgWeb_create_page_view(request):
    return render(request, 'portfolio/ProgWeb.html')


def University_create_page_view(request):
    return render(request, 'portfolio/University.html')


def SiteMap_create_page_view(request):
    return render(request, 'portfolio/SiteMap.html')


def blog_page_view(request):
    context = {"articles": Article.objects.all()}
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

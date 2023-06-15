from django.urls import path
from . import views

app_name = 'portfolio'

urlpatterns = [
    path('', views.home_page_view, name='home'),
    path('blog', views.blog_page_view, name='blog'),
    path('video', views.video_page_view, name='video'),
    path('register-author', views.author_register_page_view, name='register-author'),
    path('create-article', views.article_create_page_view, name='create-article'),
]

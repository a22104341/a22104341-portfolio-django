from django.urls import path
from . import views

app_name = 'portfolio'

urlpatterns = [
    path('', views.home_page_view, name='home'),
    path('blog', views.blog_page_view, name='blog'),
    path('video', views.video_page_view, name='video'),
    path('register-author', views.author_register_page_view, name='register-author'),
    path('create-article', views.article_create_page_view, name='create-article'),
    path('education', views.education_create_page_view, name='education'),
    path('interesting', views.interesting_create_page_view, name='interesting'),
    path('JavaScriptPlayground', views.javaScriptPlayground_create_page_view, name='JavaScriptPlayground'),
    path('Personal', views.Personal_create_page_view, name='Personal'),
    path('ProgWeb', views.ProgWeb_create_page_view, name='ProgWeb'),
    path('University', views.University_create_page_view, name='University'),
    path('SiteMap', views.SiteMap_create_page_view, name='SiteMap'),
]

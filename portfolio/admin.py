from django.contrib import admin
from .models import Author, BlogOwner, Blog, Area, Article, Comment, Like

# Register your models here.
admin.site.register(Author)
admin.site.register(BlogOwner)
admin.site.register(Blog)
admin.site.register(Area)
admin.site.register(Article)
admin.site.register(Comment)
admin.site.register(Like)

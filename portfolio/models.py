from django.db import models


# Create your models here.
class Author(models.Model):
    firstName = models.CharField(max_length=250, null=False)
    lastName = models.CharField(max_length=250)
    email = models.CharField(max_length=250, null=False)
    phoneNr = models.IntegerField(null=False)
    birthdate = models.DateField()
    verified = models.BooleanField(null=False)

    def __str__(self):
        return self.email


class BlogOwner(models.Model):
    firstName = models.CharField(max_length=250, null=False)
    lastName = models.CharField(max_length=250)
    email = models.CharField(max_length=250, null=False)

    def __str__(self):
        return self.email


class Blog(models.Model):
    name = models.CharField(max_length=100)
    owner = models.OneToOneField(BlogOwner, null=False, on_delete=models.CASCADE, related_name='blog')

    def __str__(self):
        return self.name


class Area(models.Model):
    name = models.CharField(max_length=100)
    blog = models.ForeignKey(Blog, null=False, on_delete=models.CASCADE, related_name='area')

    def __str__(self):
        return self.name


class Article(models.Model):
    title = models.CharField(max_length=250, null=False)
    content = models.TextField(max_length=1000, null=False)
    createdAt = models.DateTimeField(auto_now_add=True, null=False)
    area = models.ForeignKey(Area,null=False,  on_delete=models.CASCADE)
    author = models.ManyToManyField(Author, null=False, related_name='article')

    def __str__(self):
        return self.title


class Comment(models.Model):
    text = models.TextField()
    createdAt = models.DateTimeField(auto_now_add=True, null=False)
    article = models.ForeignKey(Article, on_delete=models.CASCADE)

    def __str__(self):
        return self.text


class Like(models.Model):
    article = models.OneToOneField(Article, on_delete=models.CASCADE)
    count = models.IntegerField(default=0, null=False)

    def __str__(self):
        return f"{self.article.title} - Likes: {self.count}"


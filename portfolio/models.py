from django.db import models

# Create your models here.
class Author(models.Model):
    firstName = models.CharField(max_length=250, null = False)
    lastName = models.CharField(max_length=250)
    email = models.CharField(max_length=250, null = False)
    phoneNr = models.IntegerField(null = False)
    birthdate = models.DateField()
    verified = models.BooleanField(null = False)

    def __str__(self):
        return self.email

class Post(models.Model):
    title = models.CharField(max_length=250, null = False)
    content = models.CharField(max_length=1000, null = False)
    date = models.DateField(null = False)
    #image = models.ImageField()
    author = models.ForeignKey(Author, on_delete = models.CASCADE, related_name = "posts")

    def __str__(self):
        return self.title

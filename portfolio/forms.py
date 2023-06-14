from django import forms
from django.forms import ModelForm
from .models import Author, Article, Comment


class AuthorForm(ModelForm):
    class Meta:
        model = Author
        fields = '__all__'
        widgets = {
            'firstName': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'John', 'type': 'text'}),
            'lastName': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Doe', 'type': 'text'}),
            'email': forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'johnDoe@gmail.com',
                                             'type': 'email'}),
            'phoneNumber': forms.TextInput(attrs={'class': 'form-control', 'placeholder': '351917724742',
                                                  'type': 'text'}),
            'birthdate': forms.DateInput(attrs={'class': 'form-control', 'onfocus': "(this.type='date')"}),
            'verified': forms.CheckboxInput(attrs={'class': 'form-check-input'}),
        }


class ArticleForm(ModelForm):
    class Meta:
        model = Article
        fields = '__all__'
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Title'}),
            'content': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Write your Content Here'}),
        }


class CommentForm(ModelForm):
    class Meta:
        model = Comment
        fields = '__all__'

        widgets = {
            'text': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Write your comment'}),
        }

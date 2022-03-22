from django.urls import path
from dwarvish_app import views

urlpatterns = [
    path('', views.lesson_index, name='lesson_index'),
    path('lesson1/index.html', views.index, name='lesson1')
]
from django.shortcuts import render
from rest_framework import viewsets
from .models import Char
from dwarvish_app import serializers

def lesson_index(request):
    return render(request, 'lesson_index.html', {})

def index(request):
    return render(request, 'lesson1/index.html', {})

class CharAll(viewsets.ModelViewSet) :
    serializer_class = serializers.EngCirthSerializer
    queryset = Char.objects.all()

class CharVowels(viewsets.ModelViewSet) :
    serializer_class = serializers.EngCirthSerializer
    queryset = Char.objects.filter(english__in = ('a', 'e', 'i', 'o', 'u'))

class CharConsOne(viewsets.ModelViewSet) :
    serializer_class = serializers.EngCirthSerializer
    queryset = Char.objects.filter(english__in =  ('b', 'd', 'f', 'g', 'j', 'k', 'l', 'm', 'n'))

class CharConsThree(viewsets.ModelViewSet) :
    serializer_class = serializers.EngCirthSerializer
    queryset = Char.objects.filter(english__in = ('p', 'q', 'r', 's', 't', 'v', 'w', 'z'))

class CharCompCons(viewsets.ModelViewSet) :
    serializer_class = serializers.EngCirthSerializer
    queryset = Char.objects.exclude(english__in = ('ee', 'silente', 'oo', 'uu', 'ou', 'nd', 'th', 'ch', 'and'))

class CharGrpLtr(viewsets.ModelViewSet) :
    serializer_class = serializers.EngCirthSerializer
    queryset = Char.objects.exclude(english__in = ('nd', 'th', 'ch', 'and'))


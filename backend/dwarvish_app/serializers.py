from rest_framework import serializers
from dwarvish_app import models

class EngCirthSerializer(serializers.ModelSerializer) :
    class Meta:
        model = models.Char
        fields = ('id', 'english', 'dwarvish')
from rest_framework import serializers
from dwarvish_app import models

class EngCirthSerializer(serializers.ModelSerializer) :
    ''' The serializer turns the english-cirth model into a JSON object
    '''
    class Meta:
        model = models.Char
        fields = ('id', 'english', 'dwarvish')
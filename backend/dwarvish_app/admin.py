from django.contrib import admin
from dwarvish_app.models import Char

class CharAdmin(admin.ModelAdmin):
    pass
admin.site.register(Char, CharAdmin)

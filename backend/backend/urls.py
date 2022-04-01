"""dwarvish URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from dwarvish_app import views

''' These routers specify unique urls at which different sets of characters
    from the database can be pulled.
'''

all_chars_r = routers.DefaultRouter()
all_chars_r.register(r'all',views.CharAll, 'all')

vowels_chars = routers.DefaultRouter()
vowels_chars.register(r'vowels',views.CharVowels, 'vowels')

char_cons_one = routers.DefaultRouter()
char_cons_one.register(r'cons_one',views.CharConsOne, 'cons_one')

comp_cons = routers.DefaultRouter()
comp_cons.register(r'comp_cons',views.CharCompCons, 'comp_cons')

cons_three = routers.DefaultRouter()
cons_three.register(r'cons_three',views.CharConsThree, 'cons_three')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('dwarvish_app.urls')),
    path('api/', include(all_chars_r.urls)),
    path('api/', include(vowels_chars.urls)),
    path('api/', include(char_cons_one.urls)),
    path('api/', include(comp_cons.urls)),
    path('api/', include(cons_three.urls))
]
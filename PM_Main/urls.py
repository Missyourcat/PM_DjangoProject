# @Time: 2024/11/2 19:57
# @Author: Shen Hao
# @File: urls.py
# @system: Win10
# from django.conf.urls import url
from . import views
from django.urls import path

urlpatterns = [
    path('', views.index,name="index"),
    path('index/', views.index, name="index"),
    path('describe/', views.describe, name="describe"),
]
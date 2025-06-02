from django.urls import path,include
from rest_framework import routers
from accounts import views as UserView

urlpatterns = [
    path('register/',UserView.registerUser.as_view(), name='register_user'),
]
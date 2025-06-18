from django.urls import path
from .views import CoachList

urlpatterns = [
    path('', CoachList.as_view(), name='coach-list'),
]

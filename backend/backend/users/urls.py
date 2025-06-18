from django.urls import path
from .views import UserProfileDetail

urlpatterns = [
    path('me/', UserProfileDetail.as_view(), name='my-profile'),
]

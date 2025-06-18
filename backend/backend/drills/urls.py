from django.urls import path
from .views import DrillListCreate

urlpatterns = [
    path('', DrillListCreate.as_view(), name='drill-list-create'),
]

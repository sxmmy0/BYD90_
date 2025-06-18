from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Drill
from .serializers import DrillSerializer

class DrillListCreate(generics.ListCreateAPIView):
    queryset = Drill.objects.all()
    serializer_class = DrillSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

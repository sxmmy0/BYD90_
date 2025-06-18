from rest_framework import generics
from .models import Coach
from .serializers import CoachSerializer

class CoachList(generics.ListAPIView):
    queryset = Coach.objects.all()
    serializer_class = CoachSerializer

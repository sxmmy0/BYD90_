from django.db import models
from django.contrib.auth.models import User

class Coach(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    certifications = models.TextField(blank=True)
    training_styles = models.TextField(blank=True)
    skill_focus = models.CharField(max_length=200, blank=True)
    socials = models.URLField(blank=True)
    session_types = models.CharField(max_length=200, blank=True)  # e.g. 1:1, Group, Virtual
    price_per_session = models.DecimalField(max_digits=6, decimal_places=2)
    location = models.CharField(max_length=100, blank=True)
    availability = models.TextField(blank=True)  # could eventually be refined

    def __str__(self):
        return self.user.username

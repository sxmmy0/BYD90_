from django.contrib.auth.models import User
from django.db import models

class UserProfile(models.Model):
    ROLE_CHOICES = [
        ('player', 'Player'),
        ('coach', 'Coach'),
    ]
    POSITION_CHOICES = [
        ('Striker', 'Striker'),
        ('Winger', 'Winger'),
        ('Midfielder', 'Midfielder'),
        ('Defender', 'Defender'),
        ('Goalkeeper', 'Goalkeeper'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    bio = models.TextField(blank=True)
    location = models.CharField(max_length=100, blank=True)
    playing_position = models.CharField(max_length=20, choices=POSITION_CHOICES, blank=True)
    team_supported = models.CharField(max_length=100, blank=True)
    team_played_for = models.CharField(max_length=100, blank=True)
    coaching_style = models.TextField(blank=True)
    coaching_focus = models.CharField(max_length=200, blank=True)  # e.g. “Wingers, Recovery, Finishing”


from django.contrib.auth.models import User
from django.db import models

class UserProfile(models.Model):
    USER_LEVELS = [
        ('Beginner', 'Beginner'),
        ('Intermediate', 'Intermediate'),
        ('Advanced', 'Advanced'),
        ('Semi-Pro', 'Semi-Pro'),
        ('Pro', 'Pro'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    location = models.CharField(max_length=100, blank=True)
    profile_picture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)
    bio = models.TextField(blank=True)
    playing_level = models.CharField(max_length=20, choices=USER_LEVELS, blank=True)
    languages = models.CharField(max_length=100, blank=True)
    team_supported = models.CharField(max_length=100, blank=True)
    team_played_for = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.user.username

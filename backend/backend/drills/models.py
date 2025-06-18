from django.db import models
from django.contrib.auth.models import User

class Drill(models.Model):
    POSITIONS = [
        ('Striker', 'Striker'),
        ('Winger', 'Winger'),
        ('Midfield', 'Midfield'),
        ('Defender', 'Defender'),
        ('Goalkeeper', 'Goalkeeper'),
        ('General', 'General'),
    ]

    coach = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='drills')
    title = models.CharField(max_length=100)
    description = models.TextField()
    video_url = models.URLField(blank=True)
    position = models.CharField(max_length=20, choices=POSITIONS)
    difficulty = models.CharField(max_length=20, choices=[('Easy', 'Easy'), ('Medium', 'Medium'), ('Hard', 'Hard')])
    tags = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

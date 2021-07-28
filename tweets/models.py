from django.db import models
from django.conf import settings
import random

User = settings.AUTH_USER_MODEL

class Tweet(models.Model):
 # id = models.AutoField(primary_key=True)
 user = models.ForeignKey(User, on_delete=models.CASCADE) # Many user can have may tweets
 content = models.TextField(blank=True, null=True)
 image = models.FileField(upload_to="images/", blank=True, null=True)
 
 # def __str__ (self):
 #  return self. content

 class Meta:
  ordering = ['-id']

 def serialize(self):
  return {
   "id": self.id,
   "content": self.content,
   "likes": random.randint(0, 168)
  }

from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    pass  # Puedes añadir campos personalizados aquí en el futuro

# authentication/views.py

from django.contrib.auth import login, authenticate
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
import json
from .models import CustomUser

@csrf_exempt
def register(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        user = CustomUser.objects.create_user(username=username, password=password)
        user.save()
        return JsonResponse({"message": "User created successfully"}, status=201)

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({"message": "User logged in successfully"}, status=200)
        return JsonResponse({"message": "Invalid credentials"}, status=400)
    
    # Devuelve un mensaje informando que es necesario un método POST para iniciar sesión
    return JsonResponse({"message": "Please use POST to log in"}, status=405)

@login_required(login_url='/login/')
def protected_view(request):
    return JsonResponse({"message": "Esta es una vista protegida."}, status=200)

from django.contrib.auth import login, authenticate
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
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
        return JsonResponse({"message": "User created successfully"})

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({"message": "User logged in successfully"})
        return JsonResponse({"message": "Invalid credentials"}, status=400)

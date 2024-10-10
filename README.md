Sistema de Login y Registro con Django y Next.js
Este proyecto es una aplicación web completa de autenticación que permite a los usuarios registrarse, iniciar sesión y acceder a una página protegida solo si están autenticados. Está construido usando Django para el backend y Next.js con TypeScript para el frontend. PostgreSQL se utiliza como base de datos.

Características
Registro de usuarios: Los usuarios pueden registrarse proporcionando su correo electrónico, contraseña, nombre y apellido.
Inicio de sesión: Los usuarios pueden iniciar sesión con su correo y contraseña.
Página de bienvenida protegida: Solo los usuarios autenticados pueden acceder a esta página.
Redirección automática: Los usuarios no autenticados serán redirigidos a la página de inicio de sesión al intentar acceder a páginas protegidas.
Cierre de sesión: Los usuarios pueden cerrar sesión y ser redirigidos a la página de inicio de sesión.
Requisitos
Python 3.8 o superior
Node.js 14 o superior
PostgreSQL en ejecución
Instalación y Configuración
Backend (Django)
Configurar entorno virtual:

Crea un entorno virtual en el directorio del backend y actívalo.
python -m venv env
source env/bin/activate  # En Windows, usa `env\Scripts\activate`
Instalar dependencias:
pip install django djangorestframework psycopg2-binary django-cors-headers
Configurar la base de datos:

Crea la base de datos en PostgreSQL.
sql
Copy code
CREATE DATABASE usuarios_db;
CREATE USER myuser WITH PASSWORD 'mypassword';
GRANT ALL PRIVILEGES ON DATABASE usuarios_db TO myuser;
Configura la conexión en settings.py:
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'usuarios_db',
        'USER': 'myuser',
        'PASSWORD': 'mypassword',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
Configurar CORS:

Agrega los orígenes permitidos en settings.py:
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
]
CORS_ALLOW_CREDENTIALS = True
Migrar la base de datos:
python manage.py makemigrations
python manage.py migrate
Crear superusuario:
python manage.py createsuperuser


Iniciar el servidor de Django:
python manage.py runserver
Frontend (Next.js)
Instalar Next.js:

En el directorio frontend, instala Next.js con TypeScript.
npx create-next-app@latest frontend --typescript
Instalar dependencias:


npm install axios
Configurar Axios:

Crea un archivo src/utils/axios.ts:
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/users/',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // Envía las cookies de sesión
});

export default instance;
Iniciar el servidor de Next.js:
npm run dev
Estructura de Rutas
/register: Página de registro de usuario.
/login: Página de inicio de sesión.
/welcome: Página protegida de bienvenida, solo accesible si el usuario está autenticado.
Notas sobre Seguridad
CORS: Asegúrate de que CORS esté configurado correctamente para permitir solicitudes desde el frontend a través de cookies de sesión.
HTTPS: Implementa HTTPS en producción para asegurar el tráfico de datos sensibles.

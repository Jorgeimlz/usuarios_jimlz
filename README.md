# Sistema de Login y Registro con Django y Next.js

Este proyecto es una aplicación web completa de autenticación que permite a los usuarios registrarse, iniciar sesión y acceder a una página protegida solo si están autenticados. Está construido usando Django para el backend y Next.js con TypeScript para el frontend. PostgreSQL se utiliza como base de datos.

## Características

- **Registro de usuarios**: Los usuarios pueden registrarse proporcionando su correo electrónico, contraseña, nombre y apellido.
- **Inicio de sesión**: Los usuarios pueden iniciar sesión con su correo y contraseña.
- **Página de bienvenida protegida**: Solo los usuarios autenticados pueden acceder a esta página.
- **Redirección automática**: Los usuarios no autenticados serán redirigidos a la página de inicio de sesión al intentar acceder a páginas protegidas.
- **Cierre de sesión**: Los usuarios pueden cerrar sesión y ser redirigidos a la página de inicio de sesión.

## Requisitos

- Python 3.8 o superior
- Node.js 14 o superior
- PostgreSQL en ejecución

## Instalación y Configuración

### Backend (Django)

1. **Configurar entorno virtual**:
   - Crea un entorno virtual en el directorio del backend y actívalo.

     ```bash
     python -m venv env
     source env/bin/activate  # En Windows, usa `env\Scripts\activate`
     ```
2. **Instalar dependencias**:

   ```bash
   pip install django djangorestframework psycopg2-binary django-cors-headers

Configurar la base de datos:

Crea la base de datos en PostgreSQL.

3. Crear las migraciones
python manage.py makemigrations
python manage.py migrate


**Frontend (Next.js)**
Instalar Next.js:

1. En el directorio frontend, instala Next.js con TypeScript.
   npx create-next-app@latest frontend --typescript
2. Instalar dependencias:
   npm install axios

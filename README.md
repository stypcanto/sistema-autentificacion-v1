# Sistema de Autenticación con React, Node.js y PostgreSQL

Este proyecto es un sistema de autenticación completo con **React** en el frontend y **Node.js** con **Express** en el backend. Proporciona las funcionalidades esenciales para la gestión de usuarios y autenticación segura, usando las mejores prácticas de seguridad.

Comparto este proyecto ya que es una muy buena herramienta para entrenar como funciona el front-end y el back-end combinando multiples tecnologías:

- Frontend: React, Axios
- Backend: Node.js, Express
- Base de datos: PostgreSQL
- Autenticación: JWT, bcrypt

---

## 🚀 Funcionalidades

- **Registro de usuarios**: Los usuarios pueden registrarse proporcionando un nombre de usuario y contraseña.
- **Inicio de sesión**: Autenticación mediante nombre de usuario y contraseña.
- **Encriptación de contraseñas**: Las contraseñas se encriptan de manera segura usando **bcrypt**.
- **JSON Web Tokens (JWT)**: Implementación de JWT para una autenticación segura.
- **Protección de rutas privadas**: Solo los usuarios autenticados pueden acceder a rutas privadas del sistema.

---
📥 Instalación

- Clona este repositorio:

```bash
git clone <https://github.com/stypcanto/sistema-autentificacion-v1>

```
- Navega a la carpeta del proyecto y instala las dependencias:
    - En el backend:
    ```bash
        cd backend
        npm install
    ```
    - En el frontend:
     ```bash
        cd frontend
        npm install
 
    ```
 3. Ejecuta el servidor del backend:

 ```bash
    node server.js

  ```
 4. Ejecuta el frontend con:
   ```bash
   npm start

 ```


---
📥 Apuntes importantes creado para recordar

## 🔧 Backend

El backend está construido con **Node.js** y **Express**, y utiliza **PostgreSQL** como base de datos. La conexión con la base de datos se valida mediante el siguiente comando de PostgreSQL:

```bash
psql -U postgres -h 127.0.0.1 -p 5432 -d auth_db

```
Para verificar que la conexión a la base de datos está funcionando correctamente, revisa la configuración en el archivo db-test.js y ejecuta el siguiente comando:

```bash

node db-test.js

```
También se creó una base de datos llamada auth_db y una tabla users:

```bash
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL
);

```
Es importante instalar la dependencia CORS:

```bash
npm install cors

```
⚙️ Frontend

En el frontend, es necesario instalar la dependencia axios para realizar las solicitudes HTTP:

```bash
npm install axios


```
## 📜 Derecho de autor

Este proyecto es de propiedad de **Ing. Styp Canto**, CIP. 131278.

Contacto: [styp611@outlook.com](mailto:styp611@outlook.com)
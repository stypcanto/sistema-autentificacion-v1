# Sistema de Autenticación con React, Node.js y PostgreSQL

Este proyecto es un sistema de autenticación completo con **React** en el frontend y **Node.js** con **Express** en el backend. Proporciona las funcionalidades esenciales para la gestión de usuarios y autenticación segura, usando las mejores prácticas de seguridad.

---

## 🚀 Funcionalidades

- **Registro de usuarios**: Los usuarios pueden registrarse proporcionando un nombre de usuario y contraseña.
- **Inicio de sesión**: Autenticación mediante nombre de usuario y contraseña.
- **Encriptación de contraseñas**: Las contraseñas se encriptan de manera segura usando **bcrypt**.
- **JSON Web Tokens (JWT)**: Implementación de JWT para una autenticación segura.
- **Protección de rutas privadas**: Solo los usuarios autenticados pueden acceder a rutas privadas del sistema.

---

## 🔧 Backend

El backend está construido con **Node.js** y **Express**, y utiliza **PostgreSQL** como base de datos. La conexión con la base de datos se valida mediante el siguiente comando de PostgreSQL:

```bash
psql -U postgres -h 127.0.0.1 -p 5432 -d auth_db

Para verificar que la conexión a la base de datos está funcionando correctamente, revisa la configuración en el archivo db-test.js y ejecuta el siguiente comando:


node db-test.js

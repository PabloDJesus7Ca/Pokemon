# 🧩 Pokédex Web (Angular)

Aplicación web desarrollada con Angular que consume la API pública de Pokémon para mostrar información en tiempo real de diferentes especies.

La aplicación incluye un sistema de autenticación con control de acceso por roles, permitiendo proteger rutas mediante Guards y garantizar una navegación segura. Además, cuenta con manejo de errores y una página 404 personalizada para mejorar la experiencia del usuario.

## 🚀 Características principales

* 🔍 Búsqueda y visualización de Pokémon en tiempo real
* 🔐 Sistema de autenticación con roles
* 🛡️ Protección de rutas con Guards
* ⚠️ Manejo de errores
* 🚫 Página 404 personalizada
* ⚡ Consumo de API externa (PokéAPI)

## 🛠️ Tecnologías utilizadas

* Angular
* TypeScript
* HTML
* CSS

## 📸 Capturas de pantalla

### 🔐 Autenticación de usuarios

<img width="1278" height="718" alt="login" src="https://github.com/user-attachments/assets/ed808891-88e1-4ebc-98a6-65e03c71e158" />

Sistema de autenticación implementado en Angular con control de acceso por roles. 
Se utilizan Guards para proteger rutas y evitar el acceso no autorizado a las diferentes vistas de la aplicación.

---


### 🏠 Listado de Pokémon

Modulo Home

<img width="1299" height="717" alt="Home" src="https://github.com/user-attachments/assets/2e152f30-975b-4f95-a513-7ab0132b6f60" />

Vista principal de la aplicación donde se muestran los Pokémon obtenidos desde la PokéAPI. 
Incluye búsqueda dinámica en tiempo real y renderizado eficiente de datos mediante consumo de API REST.

---


Modulo Aleatorio

<img width="1297" height="714" alt="Aleatorio" src="https://github.com/user-attachments/assets/8f83e4fe-056a-48f3-bf22-1eaa550f329a" />

---

Modulo Por Tipo

<img width="1294" height="712" alt="Tipo" src="https://github.com/user-attachments/assets/d74d654d-6560-4d9c-b31e-601f9863f902" />

---


Modulo Por Busqueda


<img width="1294" height="703" alt="Busqueda" src="https://github.com/user-attachments/assets/34fa94dd-d75a-40d7-a5a4-f2f282281162" />



---



### 🚫 Página 404 personalizada

<img width="1304" height="750" alt="404" src="https://github.com/user-attachments/assets/97ffdbef-f86c-4e15-b755-1ed3b9d560b4" />

Manejo de rutas inválidas mediante una página 404 personalizada, mejorando la experiencia del usuario y evitando errores de navegación.


## 📌 Objetivo

Este proyecto fue desarrollado con fines de aprendizaje, enfocado en el consumo de APIs, manejo de rutas, autenticación y buenas prácticas en Angular.

## ▶️ Ejecución del proyecto

```bash
npm install
ng serve
```

## 📦 Build de producción

```bash
ng build --configuration production
```

# Domina
###### _Muchas gracias por la oportunidad 😊_

##
## Problematica a resolver
Diseñe una aplicación con arquitectura orientada a micro servicios que permita gestionar la información del usuario y sus tareas:
Los artefactos a construir serán los siguientes:
1. Un micro servicio que permita el registro del usuario y posteriormente la autenticación (básica) del mismo en NODE.
2. Un micro servicio que provee las funcionalidades de crear, actualizar y eliminar las tareas de un usuario en NODE.
3. Desarrolle las interfaces de usuario que permita la captura y la visualización de datos en el lenguaje de preferencia por usted. (Preferiblemente REACT).
4. Puede trabajar con el gestor de base de datos de su preferencia

## Requisitos
- node 18.16.0 (Version lts actual)
- Docker
- CMD
- Editor de textos de preferencia


La mayoria de datos de conexion o variables de entorno estan quemadas con el fin de facilitar las pruebas del desarrollo.

## Tecnologias y/o frameworks
### Front
- React
### Back
- Nestjs
- zod
- typeorm
- redis

#

## Installation

Luego de descargar los 3 repositorios nos ubicamos en la carpeta raiz de cada proyecto y ejecutamos

```sh
npm i
```
Para descargar los paquetes y librerias que requiere cada proyecto

Los proyectos comparten un archivo llamado _docker-compose.yml_ el cual nos proporciona la configuracion de 2 contenedores para el funcionamiento del proyecto
- redis para la conexion entre micros
- postgres como base de datos

con el comando

```sh
docker-compose up -d
```

ejecutamos los contenedores

luego en cada proyecto ejecutamos:

**domina_task**
```sh
npm run start:dev
```

**domina_auth**
```sh
npm run start:dev
```

**domina_front**
```sh
npm run dev
```
***
Tambien les comparto entre los archivos la coleccion de postman

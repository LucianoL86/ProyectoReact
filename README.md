# Aplicación web de comercio electrónico con React, Firebase y Carrito de Compras

Esta es una aplicación web desarrollada con React que utiliza Firebase para proveerse de los productos e implementa una funcionalidad de carrito de compras.

## Instalación

Para utilizar esta aplicación, sigue estos pasos:

1.  Clona el repositorio en tu máquina local.
2.  Navega hasta el directorio del proyecto.
3.  Ejecuta el comando npm install para instalar las dependencias.
4.  Ejecuta el comando npm start para iniciar la aplicación.

## Características

- **Navegación de Productos: Los usuarios pueden navegar por los productos disponibles yendo a la opción "Catálogo" desde la Navbar para ver todos los productos disponibles. También pueden filtrar por categorías yendo a la opción "Categorías" desde la Navbar. Al hacer click en "Ver mas" se podrá ingregar a una descripción mas detallada del producto seleccionado.

- **Carrito de Compras: Los usuarios pueden agregar productos al carrito, pero solo si el producto seleccionado tiene stock disponible. El carrito muestra los productos agregados junto con el subtotal y el total.

- **Simulación de Compra: Al hacer click en el botón "Finalizar compra", el usuario debe completar un formulario con sus datos personales, esto simula la compra de los productos en el carrito, modifica el stock de los productos comprados en Firebase y el usuario recibe un número de compra.

- **Carrito Persistente: Los productos en el carrito se almacenan en el almacenamiento local (local storage) de cada usuario. Esto permite que los usuarios accedan a su carrito incluso si cierran el sitio y vuelven a abrirlo.

## Dependencias

Las principales dependencias utilizadas en este proyecto son:

-   React: Una biblioteca de JavaScript para construir interfaces de usuario.
-   Firebase: Una plataforma para construir aplicaciones web y móviles con sincronización de datos en tiempo real.
-   npm: El administrador de paquetes para el entorno de ejecución de JavaScript Node.js.

Consulta el archivo package.json para obtener una lista completa de las dependencias.

## Contribuciones

Las contribuciones a este proyecto son bienvenidas. Si encuentras algún problema o tienes sugerencias para mejoras, crea un nuevo problema (issue) o envía una solicitud de extracción (pull request).

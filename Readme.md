# Agregar etiquetas a HTML desde JavaScript

[![K-051.jpg](https://i.postimg.cc/G2gWZ6jz/K-051.jpg)](https://postimg.cc/FdcCSW8J)

Uso de las funciones ```insertBefore``` e ```insertAdjacentElement``` para agregar etiquetas a un archivo de HTML para recrear el proyecto [Hola mundo con HTML, CSS y JavaScript](https://github.com/adnksharp/wHW)

### HTML
En este proyecto las únicas etiquetas que se agregan corresponden a los scripts:

- **index**: Script que agrega las etiquetas ```div``` y ```p``` para crear el proyecto.
- **animation**: Script del proyecto **Hola mundo...**.

### CSS
Colores de fondo y texto, fuente a utilizar y ubicación de los elementos.

### JavaScript
Usando la función ```createElement``` creamos los elementos que se agregarán al archivo HTML con su clase (```setAttribute```). 

Para agregar elementos dentro del **body** usamos la función ```firstChild``` en ```body.insertBefore``` y para agregar elementos dentro de un elemento usamos la función ```beforeend``` en ```element.insertAdjacentElement```.
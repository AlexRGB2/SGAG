# Integradora II. SGAG (Sistema de Gestión Administrativa del Gimnasio)

## Contenido
<details>
  <summary>Tabla de contenido</summary>
  <ol>
    <li>
      <a href="#acerca-del-proyecto">Acerca del Proyecto</a>
      <ul>
        <li><a href="#descripción">Descripción</a></li>
        <li><a href="#objetivo-general">Objetivo General</a></li>
        <li><a href="#objetivos-específicos">Objetivos específicos</a></li>
      </ul>
    </li>
    <li>
      <a href="#análisis-y-diseño-de-la-solución">Análisis y Diseño de la Solución</a>
      <ul>
        <li><a href="#historias-de-usuario">Historias de Usuario</a></li>
        <li><a href="#diagrama-casos-de-uso">Diagrama de Casos de Uso</a></li>
        <li><a href="#modelo-de-la-base-de-datos">Modelo de la Base de Datos</a></li>
        <li><a href="#diagrama-de-actividades">Diagrama de Actividades</a></li>
        <li><a href="#modelo-vista-controlador">Modelo Vista Controlador</a></li>
        <li><a href="#diagrama-de-componentes">Diagrama de Componentes</a></li>
      </ul>
    </li>
    <li>
      <a href="#implementación">Implementación</a>
      <ul>
        <li><a href="#estándares-de-base-de-datos">Estándares de Base de Datos</a></li>
        <li><a href="#estándares-de-codificación">Estándares de Codificación</a></li>
      </ul>
    </li>      
    <li><a href="#casos-de-prueba-y-su-ejecución">Casos de Prueba y su Ejecución</a></li>       
    <li>
      <a href="#guias">Guias</a>
      <ul>
        <li><a href="#requisitos">Requisitos</a></li>
        <li><a href="#instalación">Instalación</a></li>
        <li><a href="#uso">Uso</a></li>
      </ul>
    </li>
    <li><a href="#participantes">Participantes</a></li>
  </ol>
</details>

<!-- Acerca del proyecto -->
## Acerca del Proyecto.

<!-- Descripción -->
### Descripción.

El dueño del gimnasio “Spartacus Fitness Center”, tiene la necesidad de implementar un sistema, el cual lo ayude a él y sus empleados a contar con una mejor y más eficaz administración del gimnasio. Actualmente esta administración no se está llevando a cabo de manera adecuada, los principales problemas que se presentan en este caso, es que no tienen una buena administración de sus productos, esto incluye las entradas y salidas que tiene el gimnasio, los registros de entrada y salida por parte de los empleados no son óptimos, al igual que el catálogo físico de las maquinas no siempre es de gran ayuda. En cuanto a las clases de los clientes con el instructor, se necesita que tengan un mejor orden, ya sea se agreguen o se cancelen clases. En base a esta problemática se tomó la decisión de elaborar una aplicación web que ayude al personal del gimnasio con la administración de este. La mejora de los tiempos en la realización de cada actividad y la efectividad en administración del gimnasio es una forma de medir el éxito que se espera tener al concluir con el desarrollo del proyecto.

En nuestro caso, no se abarcará el proyecto en general, ya que este fue dividido en distintos módulos los cuales fueron asignados de manera equitativa los equipos de desarrollo, por lo que a nosotros se nos solicitó la venta de productos, el cliente comentó que muchas veces las ventas no son registradas de manera adecuada, además de que el hecho de llevar todo el proceso de venta a mano hace que este sea agotador y tardado, por lo que busca optimizar este proceso, también busca que el inventario se actualice automáticamente después de cada venta para llevar un mejor control de este, se comentó que desea que se realicen cortes diarios de manera automática para ayudar con la contabilidad del establecimiento. Una vez comprendido esto, se pretende elaborar un módulo en el cual se pueda realizar la venta de productos, estos serán agregados a la lista de compras mediante su código de barras y al momento de realizar la venta, se podrá seleccionar el método de pago, ya sea en efectivo o mediante tarjeta de crédito, esto con el fin de que los clientes tengan otras maneras de pagar en caso de que no cuenten con efectivo, estas ventas serán registradas en el sistema y el stock de los productos vendidos será actualizado automáticamente, dichas ventas podrán ser consultadas por el usuario cuando sea necesario, también se implementará la opción de cortes diarios y se decidió que estos podrán ser consultados mediante día, mes y año.

Para el desarrollo de este proyecto se cuenta con aproximadamente 12 semanas (30 de enero de 2023 al 21 de abril de 2023) lo cual se considera más que suficiente para entregar una aplicación completamente funcional y que realmente sea de utilidad para el cliente. Se estima que el costo total de este módulo será de $15,000 pesos mexicanos.

<!-- Objetivo -->
### Objetivo General.

Desarrollar un módulo de venta de productos para el gimnasio "Spartacus Fitness Center" que permita optimizar el proceso de venta y llevar un mejor control del inventario, con el fin de mejorar la eficacia y eficiencia de la administración del establecimiento.

<!-- Objetivos Específicos -->
### Objetivos Específicos.
* Diseñar una interfaz gráfica de usuario amigable y accesible que permita la gestión de ventas de manera fácil y rápida.
* Permitir el registro de ventas mediante el código de barras de los productos, para agilizar el proceso de venta y minimizar errores en el registro, además que después de cada venta el stock de los productos es actualizado automáticamente.
* Implementar diferentes opciones de pago para las ventas, ya sea en efectivo o mediante tarjeta de crédito.
* Incorporar un sistema de consulta de ventas para que el personal del gimnasio pueda revisar y analizar las ventas realizadas cuando lo necesite.
* Incluir cortes diarios que permitan llevar un control de la contabilidad del establecimiento, además de que estos puedan ser filtrados por día, mes y año.

<!-- Análisis del proyecto -->
## Análisis y Siseño de la Solución.

<!-- Historias de Usuario -->
### Historias de Usuario.
| Id | Como | Quiero | Para |
|----|----------|---------|------|
| 01 |Administrador|Que se actualicen los productos en el inventario después de cada venta|Tener un mejor manejo del stock de productos|
| 02 |Administrador|Que se realicen cortes diarios|Tener un control más preciso de los ingresos por cada día|
| 03 |Administrador|Ver las ventas de productos realizadas|Verificar qué ventas se han realizado y confirmar qué productos se han vendido|
| 04 |Cliente|Realizar pagos de productos mediante tarjeta|Comprar productos en caso de que no traiga efectivo|

<!-- Diagrama de Casos de Uso -->
### Diagrama Casos de Uso.
<p align="center">
  <img src="https://user-images.githubusercontent.com/70409607/228640928-112fc0da-6177-4f82-b1cc-4f38420bee78.jpg">
</p>

<!-- Modelo de la Base de Datos -->
### Modelo de la Base de Datos.
La base de datos a utilizar será una no relacional, en la que se utilizará como gestor de base de datos MongoDB Atlas. Dicho modelo queda de la siguiente manera.

<p align="center">
  <img src="https://user-images.githubusercontent.com/70409607/231613845-556ec387-b107-4ce5-8b57-e23fb3c3b876.png">
</p>

La colección "producto" almacena información de los productos disponibles en el inventario, esta cuenta con los siguientes campos:
- "nombre": Nombre del producto (cadena de caracteres).
- "precio": Precio del producto (valor numérico).
- "categoria": Categoría del producto (cadena de caracteres).
- "stock": Cantidad de unidades disponibles en inventario (valor numérico).
- "codeBar": Código de barras del producto (cadena de caracteres).
- "img": URL de la imagen representativa del producto (cadena de caracteres).

<p align="center">
  <img src="https://user-images.githubusercontent.com/70409607/231613958-7a244de2-05a2-4c93-8401-ab14eb250ff6.png">
</p>

La colección "venta" almacena información de cada de venta realizada incluyendo los productos adquiridos, esta cuenta con los siguientes campos:
- "productos": Un arreglo que contiene información detallada de los productos vendidos. Cada elemento del arreglo es un objeto que contiene los siguientes campos:
  - "nombre": Nombre del producto (cadena de caracteres).
  - "codeBar": Código de barras del producto (cadena de caracteres).
  - "cantidad": Cantidad de unidades vendidas (valor numérico).
- "tipoPago": Tipo de pago utilizado en la transacción (cadena de caracteres).
- "fecha": Fecha en que se realizó la transacción (valor de fecha/hora).
- "total": Total de la venta (valor numérico).

<p align="center">
  <img src="https://user-images.githubusercontent.com/70409607/231613959-07112dee-1491-42a0-9cad-c7be6f780f59.png">
</p>

La colección "corteDiario" almacena información del corte diario de caja, esta cuenta con los siguientes campos:
- "totalEfectivo": Total de las ventas realizadas en efectivo durante el día (valor numérico).
- "totalTarjeta": Total de las ventas realizadas con tarjeta durante el día (valor numérico).
- "total": Total de las ventas del día (valor numérico).
- "fecha": Fecha en que se realizó el corte diario (valor de fecha/hora).

Este estándar de la base de datos proporciona una estructura clara y detallada para almacenar información sobre los productos, las ventas y los cortes diarios de caja en el gimnasio. Cada colección tiene campos específicos que facilitan la consulta y el análisis de la información, lo que permite una gestión más eficiente y efectiva de la operación del negocio.

<!-- Diagrama de Actividades -->
### Diagrama de Actividades.
<p align="center">
  <img src="https://user-images.githubusercontent.com/70409607/228642288-cf457936-d1ff-4e6f-a19e-81920824825b.png">
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/70409607/228642286-0ef6f920-90f3-40c3-9d8c-ce54984cd3a3.jpg">
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/70409607/228642290-b7045b87-6af9-40fe-b830-346f11ec16e7.jpg">
</p>

<!-- Modelo Vista Controlador -->
### Modelo Vista Controlador.
<p align="center">
  <img src="https://user-images.githubusercontent.com/70409607/228961106-3f5f4263-65f5-4fad-a4cd-d8beb0c304bd.png">
</p>

<!-- Diagrama de Componentes -->
### Diagrama de Componentes.
<p align="center">
  <img src="https://user-images.githubusercontent.com/70409607/229139629-2d9692b8-80b7-45d6-9a60-fa4598449f93.jpg">
</p>

<!-- Implementación del proyecto -->
## Implementación.

<!-- Estándares de Codificación -->
### Estándares de Codificación.
A continuación, se presenta un posible estándar de programación para el desarrollo de aplicaciones web utilizando el stack MEAN (MongoDB, Express.js, Angular y Node.js):

1.- Convenciones de nomenclatura:
- Utilizar camelCase para los nombres de variables, funciones y métodos.
- Utilizar PascalCase para los nombres de clases y componentes.
- Utilizar guiones bajos para los nombres de las rutas de la API y las colecciones de la base de datos.
- Utilizar nombres descriptivos y significativos para las variables, funciones y métodos.

2.- Estructura de la aplicación:
- Utilizar una estructura de archivos modular y escalable que separe las diferentes capas de la aplicación (presentación, lógica de negocio, acceso a datos).
- Utilizar un enfoque basado en componentes para la estructura de la aplicación Angular.
- Utilizar la arquitectura de microservicios para separar diferentes componentes y servicios de la aplicación.

3.- Codificación:
- Utilizar TypeScript como lenguaje de programación para mejorar la legibilidad y la seguridad del código.
- Utilizar patrones de diseño y principios de SOLID para escribir código escalable y mantenible.
- Utilizar pruebas unitarias y de integración para garantizar la calidad y la robustez del código.
- Utilizar herramientas de linting y formateo de código para garantizar la coherencia y la legibilidad del código.

4.- Rendimiento:
- Utilizar prácticas de optimización de rendimiento para garantizar una experiencia de usuario fluida y rápida.
- Utilizar técnicas de caching y almacenamiento en caché para reducir la carga en el servidor y mejorar el rendimiento de la aplicación.
- Optimizar la carga y la descarga de recursos y datos para reducir el tiempo de respuesta de la aplicación.

5.- Documentación:
- Documentar el código de manera clara y concisa para facilitar el mantenimiento y la comprensión del código.

Siguiendo este estándar de programación, se puede desarrollar aplicaciones web robustas, escalables y seguras utilizando el stack MEAN.

<!-- Casos de prueba -->
## Casos de Prueba y su Ejecución.
Para probar el correcto funcionamiento del módulo y asegurarnos de que el producto entregado al cliente no cuente con ninguna falla se realizaron algunos casos de prueba los cuales se presentan a continuación además de su respectivo resultado obtenido.

<a href="https://docs.google.com/spreadsheets/d/1U6m8PuUUGnx6aFcqUrcu-ghJ7VgSTqte/edit?usp=share_link&ouid=116646991518427796990&rtpof=true&sd=true">Casos de prueba módulo de ventas</a>

<!-- guías para funcionamiento del sistema -->
## Guias.

<!-- Requisitos -->
### Requisitos.
Para instalar el proyecto en un entorno de desarrollo y posteriormente hacer uso de este, es necesario contar con los siguientes requisitos instalados en el ordenador:

* **Node.js:** Instala la última versión estable de Node.js. Puedes descargarla desde su sitio web oficial: https://nodejs.org/es/
* **Angular CLI:** Angular CLI es una herramienta de línea de comandos que facilita la creación y gestión de proyectos de Angular. Para instalarlo, abre una terminal o consola y ejecuta el siguiente comando:

<p align="center">
  <em>npm install -g @angular/cli</em>
</p>

* **Editor de código:** Puedes utilizar cualquier editor de código para desarrollar tu proyecto de Angular. Algunas opciones populares son Visual Studio Code, Sublime Text, Atom, entre otros.

<!-- Instalación -->
### Instalación.
Para realizar la instalación del sistema en un entorno de desarrollo se pueden seguir los pasos descritos en el siguiente manual:

[Proceso de instalación de la aplicación](https://drive.google.com/file/d/1HJRDSSOJ2yVTRsRkUHIEDXnO0PHFm_X2/view?usp=share_link)


<!-- Instalación -->
### Uso.
Para comprender el uso del proyecto, de igual manera se dejará un manual con el objetivo de que el cliente comprenda perfectamente cómo es que este funciona.

[Manual de usuario](https://drive.google.com/file/d/10w1T-rVB8mD64FLrF_iim0tTW2T-_WSz/view?usp=share_link)

## Participantes.
* [Garay Montes Víctor Andrés](https://github.com/victorsigma)
* [Martínez Bárcenas José Alexis](https://github.com/AlexRGB2)
* [Ramírez Campos Juan de Dios](https://github.com/JuanDeDiosRamirezCampos)
* [Rojas Sánchez Oscar Adahir](https://github.com/cr7kawai)

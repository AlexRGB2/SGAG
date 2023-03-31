# Proyecto Integradora Gimnasio (SGAG - Sistema de Gestión Administrativa del Gimnasio)

## Descripción
El dueño del gimnasio “Spartacus Fitness Center”, tiene la necesidad de implementar un sistema, el cual lo ayude a él y sus empleados a contar con una mejor y más eficaz administración del gimnasio. Ya que actualmente esta no se está llevando a cabo de manera adecuada, los principales problemas que se presentan en este caso, es que no tienen una buena administración de sus productos, esto incluye las entradas y salidas que tiene el gimnasio, los registros de entrada y salida por parte de los empleados no son óptimos, al igual que el catálogo físico de las maquinas no siempre es de gran ayuda. En cuanto a las clases de los clientes con el instructor, se necesita que tengan un mejor orden, ya sea se agreguen o se cancelen clases. En base a esta problemática se tomó la decisión de elaborar una aplicación web que ayude al personal del gimnasio con la administración de este. La mejora de los tiempos y la administración del gimnasio es una forma de medir el éxito que se espera tener al concluir con el desarrollo del proyecto.

En nuestro caso, no se abarcará el proyecto en general, ya que este fue dividido en distintos módulos los cuales fueron asignados de manera igualitaria a cada equipo de desarrollo, por lo que a nosotros se nos solicitó la venta de productos, dicho módulo, como su nombre lo indica, se encargará de optimizar las ventas de productos de manera física dentro del gimnasio, además de que con ello se pretende llevar un mejor control del inventario de productos con cada venta registrada, es decir, después de cada venta, se actualizará el stock de cada producto vendido. También se implementará un apartado en el que se registrarán los cortes realizados diariamente, y estos podrán ser consultados mediante filtros.

El principal objetivo que tiene la elaboración del  presente módulo es facilitar y agilizar el proceso de venta de productos a los empleados del gimnasio, con ello se refiere a que el proceso tradicional de vender productos para posteriormente registrar las ventas en un papel y actualizar el stock de los productos vendidos quedará atrás por ser algo bastante tardado y tedioso, se pretende automatizar este proceso para tener una venta de productos mucho más eficiente, es decir, después de cada venta, de manera automática se actualizará el stock de cada producto, además de que estas ventas podrán ser consultadas y se realizarán cortes diarios con el objetivo de que el administrador o empleados puedan visualizar cuánto es que se está vendiendo diariamente. También se busca implementar el pago mediante tarjeta para que el cliente en caso de no contar con efectivo pueda hacer su compra mediante este método y de igual manera mejorar la satisfacción del cliente con el servicio brindado.

De acuerdo a la complejidad del módulo solicitado, se considera que el tiempo (7 semanas) otorgado para la elaboración de este módulo desde cero y posteriormente pasar por las pruebas necesarias y en base a ello, realizar las correcciones de errores identificados, es más que suficiente para entregar un producto bien elaborado el cual cumpla con los requerimientos del cliente.

## Lista de requisitos de proyecto refinada
### Historias de usuario
| Id | Como | Quiero | Para |
|----|----------|---------|------|
| 01 |Administrador|Que se actualicen los productos en el inventario después de cada venta|Tener un mejor manejo del stock de productos|
| 02 |Administrador|Que se realicen cortes diarios|Tener un control más preciso de los ingresos por cada día|
| 03 |Administrador|Ver las ventas de productos realizadas|Verificar qué ventas se han realizado y confirmar qué productos se han vendido|
| 04 |Cliente|Realizar pagos de productos mediante tarjeta|Comprar productos en caso de que no traiga efectivo|

### Diagrama de casos de uso
![Diagrama de casos de uso](https://user-images.githubusercontent.com/70409607/228640928-112fc0da-6177-4f82-b1cc-4f38420bee78.jpg)

### Diagrama de actividades
![Venta de productos](https://user-images.githubusercontent.com/70409607/228642288-cf457936-d1ff-4e6f-a19e-81920824825b.png)

![Ver ventas](https://user-images.githubusercontent.com/70409607/228642286-0ef6f920-90f3-40c3-9d8c-ce54984cd3a3.jpg)

![Ver ingresos png](https://user-images.githubusercontent.com/70409607/228642290-b7045b87-6af9-40fe-b830-346f11ec16e7.jpg)

## Modelo de la base de datos
La base de datos a utilizar será una no relacional, en la que se utilizará como gestor de base de datos MongoDB Atlas. Dicho modelo queda de la siguiente manera.

![image](https://user-images.githubusercontent.com/70409607/228937255-ac448130-c835-4a51-be09-2caf705bc41a.png)

La colección "producto" almacena información de los productos disponibles en el inventario, como el nombre, precio, categoría, stock, código de barras y una imagen representativa. Esto permite realizar búsquedas de forma eficiente al momento de realzar ventas.

![image](https://user-images.githubusercontent.com/70409607/228940450-bb9c6008-acce-43e7-815f-98b7c9664eff.png)

La colección "venta" almacena información de cada transacción de venta, incluyendo los productos adquiridos, el tipo de pago (efectivo, tarjeta, etc.), la fecha y el total de la venta. Esto permite llevar un registro detallado de las ventas realizadas y analizar el comportamiento de los clientes.

![image](https://user-images.githubusercontent.com/70409607/228940646-1833a8ab-dece-43b5-90ce-ce60f44bbeea.png)

La colección "corteDiario" almacena información del corte diario de caja, incluyendo el total de ventas en efectivo, tarjeta y el total de la venta del día. Esto permite hacer un seguimiento de las ventas totales y facilita la contabilidad del gimnasio.

### Estándar de la base de datos
La base de datos propuesta tiene tres colecciones: "producto", "pago" y "corteDiario". Cada colección contiene campos específicos que almacenan información detallada sobre los productos, las ventas y los cortes diarios de caja. A continuación se detallan los campos de cada colección:

1.- Colección "producto":
- "nombre": Nombre del producto (cadena de caracteres).
- "precio": Precio del producto (valor numérico).
- "categoria": Categoría del producto (cadena de caracteres).
- "stock": Cantidad de unidades disponibles en inventario (valor numérico).
- "codeBar": Código de barras del producto (cadena de caracteres).
- "img": URL de la imagen representativa del producto (cadena de caracteres).

2.- Colección "pago":
- "productos": Un arreglo que contiene información detallada de los productos vendidos. Cada elemento del arreglo es un objeto que contiene los siguientes campos:
  - "nombre": Nombre del producto (cadena de caracteres).
  - "codeBar": Código de barras del producto (cadena de caracteres).
  - "cantidad": Cantidad de unidades vendidas (valor numérico).
- "tipoPago": Tipo de pago utilizado en la transacción (cadena de caracteres).
- "fecha": Fecha en que se realizó la transacción (valor de fecha/hora).
- "total": Total de la venta (valor numérico).

3.- Colección "corteDiario":
- "totalEfectivo": Total de las ventas realizadas en efectivo durante el día (valor numérico).
- "totalTarjeta": Total de las ventas realizadas con tarjeta durante el día (valor numérico).
- "total": Total de las ventas del día (valor numérico).
- "fecha": Fecha en que se realizó el corte diario (valor de fecha/hora).

Este estándar de la base de datos proporciona una estructura clara y detallada para almacenar información sobre los productos, las ventas y los cortes diarios de caja en una tienda o negocio. Cada colección tiene campos específicos que facilitan la consulta y el análisis de la información, lo que permite una gestión más eficiente y efectiva de la operación del negocio.

### Estándar de programación
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

## Modelo Vista Controlador (MVC)
![image](https://user-images.githubusercontent.com/70409607/228961106-3f5f4263-65f5-4fad-a4cd-d8beb0c304bd.png)

## Diagrama de componentes
![Diagrama de comp](https://user-images.githubusercontent.com/70409607/229139629-2d9692b8-80b7-45d6-9a60-fa4598449f93.jpg)


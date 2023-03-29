export interface Producto {
  nombre: String;
  precio: Number;
  tipo: String;
  stock: Number;
  codeBar: String;
  img: String;
}

export interface Ventas {
  productos: Array<any>;
  tipoPago: String;
  fecha: Date;
  total: Number;
}

export interface ProductoVenta {
  nombre: String;
  cantidad: Number;
}

export interface ProductoVentaData {
  nombre: String;
  cantidad: Number;
  codeBar: String;
  img: String;
  total: Number;
}

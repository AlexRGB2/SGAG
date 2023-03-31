// Componente modificado por Víctor Garay 

import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductosService } from 'src/app/services/productos.service';
import { PageEvent } from '@angular/material/paginator';
import { Categoria } from '../../models/categorias';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent {
  selectedCategory: string = 'Seleccionar Categoría';
  productos: Producto[] = [];
  categorias: Categoria[] = [];
  producto: Producto = {
    nombre: '',
    precio: 0,
    tipo: '',
    stock: 0,
    codeBar: '',
    img: '',
  };
  productoSeleccionadoModal: Producto = {
    nombre: '',
    precio: 0,
    tipo: '',
    stock: 0,
    codeBar: '',
    img: '',
  };
  currentPage = 1;
  pageSize = 5;
  searchTerm = '';

  constructor(
    private producService: ProductosService,
    private categoryService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.categoryService.getCategory().subscribe((resp) => {
      this.categorias = resp;
    });
  }

  getProducts() {
    this.producService.getProducts().subscribe(
      (resp) => {
        this.productos = resp;
      },
      (err) => console.error(err)
    );
  }

  saveProduct(producto: Producto) {
    if (producto != null) {
      if (producto.nombre == '' || producto.nombre == null) {
        window.alert('Agrega el Nombre del Producto');
      } else if (
        this.selectedCategory == '' ||
        this.selectedCategory == null ||
        this.selectedCategory == 'Seleccionar Categoría'
      ) {
        window.alert('Agrega la Categoria del Producto');
      } else if (producto.precio == 0 || producto.precio == null) {
        window.alert('Agrega el Precio del Producto');
      } else if (producto.stock == 0 || producto.stock == null) {
        window.alert('Agrega el Stock del Producto');
      } else if (producto.codeBar == '' || producto.codeBar == null) {
        window.alert('Agrega el Codigo de Barras del Producto');
      } else if (producto.img == '' || producto.precio == null) {
        window.alert('Agrega el URL de la Imagen del Producto');
      } else {
        this.producto.tipo = this.selectedCategory;
        this.producService.saveProduct(this.producto).subscribe(
          (resp) => {
            window.alert('Producto ' + producto.nombre + ' Agregado');
            window.location.reload();
          },
          (err) => {
            console.error(err);
          }
        );
      }
    }
  }

  updateProduct() {
    let { precio, tipo, stock, img } = this.producto;

    if (precio == null || precio == 0) {
      precio = this.productoSeleccionadoModal.precio;
    }
    if (tipo == null || tipo == '') {
      tipo = this.productoSeleccionadoModal.tipo;
    }
    if (stock == null || stock == 0) {
      stock = this.productoSeleccionadoModal.stock;
    }
    if (img == null || img == '') {
      img = this.productoSeleccionadoModal.img;
    }

    let updateProduct = {
      precio: precio,
      tipo: tipo,
      stock: stock,
      img: img,
    };

    const nombre = this.productoSeleccionadoModal.nombre;

    this.producService.updateProduct(nombre, updateProduct).subscribe(
      (resp) => {
        window.location.reload();
      },
      (err) => console.log(err)
    );
  }

  deleteProduct(nombre: String) {
    window.alert('Producto ' + nombre + ' Eliminado');
    this.producService.deleteProduct(nombre).subscribe(
      (resp) => {
        window.location.reload();
      },
      (err) => console.error(err)
    );
  }

  mostrarDetalles(index: number) {
    const productoSeleccionado = this.productos[index];
    this.productoSeleccionadoModal = productoSeleccionado;
  }

  cambiarPagina(e: PageEvent) {}

  getCategorias() {}

  buscarPorNombre(nombre: string) {
    if (nombre != '') {
      this.producService.getProductByName(nombre).subscribe((resp) => {
        this.productos = resp;
      });
    }
  }

  buscarPorCategoria(index: number) {
    const categoryName = this.categorias[index].nombre;
    this.producService.getProductByCategory(categoryName).subscribe((res) => {
      this.productos = res;
    });
  }
}

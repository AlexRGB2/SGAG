import { Component } from '@angular/core';
import { Categoria } from 'src/app/models/categorias';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
})
export class CategoriasComponent {
  categorias: Categoria[] = [];

  categoria: Categoria = {
    nombre: '',
  };

  categoriaSeleccionadaModal: Categoria = {
    nombre: '',
  };

  searchTerm = '';

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.getCategoria();
  }

  getCategoria() {
    this.categoriaService.getCategory().subscribe(
      (resp) => {
        this.categorias = resp;
      },
      (err) => console.error(err)
    );
  }

  saveCategoria(categoria: Categoria) {
    if (categoria.nombre != null && categoria.nombre.trim() != '') {
      window.alert('Agregado');
      this.categoriaService.saveCategory(this.categoria).subscribe(
        (resp) => {
          window.location.reload();
        },
        (err) => console.error(err)
      );
    } else {
      alert('Rellena los campos');
    }
  }

  updateCategoria() {
    let { nombre } = this.categoria;

    if (nombre == null || nombre == '') {
      nombre = this.categoriaSeleccionadaModal.nombre;
    }

    let updateCategoria = {
      nombre: nombre,
    };

    const name = this.categoriaSeleccionadaModal.nombre;

    this.categoriaService.updateCategory(name, updateCategoria).subscribe(
      (resp) => {
        window.location.reload();
      },
      (err) => console.log(err)
    );
  }

  deleteCategoria(nombre: String) {
    window.alert('Categoria ' + nombre + ' Eliminada');
    this.categoriaService.deleteCategory(nombre).subscribe(
      (resp) => {
        window.location.reload();
      },
      (err) => console.error(err)
    );
  }

  mostrarDetalles(index: number) {
    const categoriaSeleccionada = this.categorias[index];
    this.categoriaSeleccionadaModal = categoriaSeleccionada;
  }

  buscar(nombre: string) {
    this.categoriaService.getCategoryByName(nombre).subscribe((res) => {
      this.categorias = res;
    });
  }
}

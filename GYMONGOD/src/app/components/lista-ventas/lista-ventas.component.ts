import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Producto, Ventas } from 'src/app/models/producto';
import { PagosService } from 'src/app/services/pagos.service';

@Component({
  selector: 'app-lista-ventas',
  templateUrl: './lista-ventas.component.html',
  styleUrls: ['./lista-ventas.component.css'],
})
export class ListaVentasComponent {
  ventas: Ventas[] = [];
  ventaSeleccionadaModal: Ventas = {
    productos: [],
    tipoPago: '',
    fecha: new Date(),
    total: 0,
  };

  venta: Ventas = {
    productos: [],
    tipoPago: '',
    fecha: new Date(),
    total: 0,
  };
  currentPage = 1;
  pageSize = 6;

  constructor(private ventaService: PagosService) {}

  ngOnInit(): void {
    this.getVentas();
  }

  getVentas() {
    this.ventaService.getVentas().subscribe(
      (resp) => {
        this.ventas = resp;
      },
      (err) => console.error(err)
    );
  }

  mostrarDetalles(index: number) {
    const ventaSeleccionada = this.ventas[index];
    this.ventaSeleccionadaModal = ventaSeleccionada;
  }

  cambiarPagina(e: PageEvent) {}
}

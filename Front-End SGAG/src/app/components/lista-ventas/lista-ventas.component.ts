// Elaboro Juan de Dios, Victor Garay

import { Component, OnInit } from '@angular/core';
import { Ventas } from 'src/app/models/producto';
import { PagosService } from 'src/app/service/pagos.service';

@Component({
  selector: 'app-lista-ventas',
  templateUrl: './lista-ventas.component.html',
  styleUrls: ['./lista-ventas.component.css'],
})
export class ListaVentasComponent implements OnInit {
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

  constructor(private ventaService: PagosService) {}

  ngOnInit(): void {
    this.getVentas();
  }

  async getVentas() {
    this.ventaService.getVentas().subscribe(
      (resp) => {
        this.ventas = resp;
      },
      (err) => console.error(err)
    );
  }

  async mostrarDetalles(index: number) {
    this.ventaSeleccionadaModal = this.ventas[index];
  }

  cambiarPagina() {}
}

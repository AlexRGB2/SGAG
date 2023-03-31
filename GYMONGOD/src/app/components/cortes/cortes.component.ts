// Componente modificado por Oscar Rojas

import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Corte } from 'src/app/models/corteDiario';
import { PagosService } from 'src/app/services/pagos.service';

@Component({
  selector: 'app-cortes',
  templateUrl: './cortes.component.html',
  styleUrls: ['./cortes.component.css'],
})
export class CortesComponent {
  cortes: Corte[] = [];

  corte: Corte = {
    totalEfectivo: 0,
    totalPaypal: 0,
    total: 0,
    fecha: new Date(),
  };

  mes: String = '';
  anio: number = 0;

  currentPage = 1;
  pageSize = 5;

  constructor(private pagoService: PagosService) {}

  ngOnInit(): void {
    this.getCortes();
  }

  getCortes() {
    this.pagoService.getCortes().subscribe(
      (resp) => {
        this.cortes = resp;
      },
      (err) => console.error(err)
    );
  }

  corteDiario() {
    this.pagoService.getCorteDiario().subscribe(
      (resp) => {
        this.cortes = resp;
      },
      (err) => console.error(err)
    );
  }

  corteMensual() {
    if (this.mes != null && this.mes != '') {
      this.pagoService.getCorteMensual(this.mes.toString().slice(-2)).subscribe(
        (resp) => {
          this.cortes = resp;
        },
        (err) => console.error(err)
      );
    } else {
      alert('Selecciona el Mes');
    }
  }

  corteAnual() {
    if (this.anio != null && this.anio >= 2020) {
      this.pagoService.getCorteAnual(this.anio).subscribe(
        (resp) => {
          this.cortes = resp;
        },
        (err) => console.error(err)
      );
    } else {
      alert('Selecciona un año Valido');
    }
  }

  cambiarPagina(e: PageEvent) {}
}

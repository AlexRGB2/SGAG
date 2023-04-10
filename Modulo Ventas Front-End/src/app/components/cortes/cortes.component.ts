import { Component, OnInit } from '@angular/core';
import { Corte } from 'src/app/models/corteDiario';
import { PagosService } from 'src/app/service/pagos.service';

@Component({
  selector: 'app-cortes',
  templateUrl: './cortes.component.html',
  styleUrls: ['./cortes.component.css'],
})
export class CortesComponent implements OnInit {
  cortes: Corte[] = [];

  corte: Corte = {
    totalEfectivo: 0,
    totalPaypal: 0,
    total: 0,
    fecha: new Date(),
  };

  mes: String = '';
  anio: number = 0;

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
          this.mes = '';
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
          this.anio = 0;
        },
        (err) => console.error(err)
      );
    } else {
      alert('Selecciona un año Valido');
    }
  }

  cambiarPagina() {}
}

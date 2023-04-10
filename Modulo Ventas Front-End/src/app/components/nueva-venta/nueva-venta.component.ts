import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { tap } from 'rxjs';
import {
  ProductoVenta,
  ProductoVentaData,
  Ventas,
} from 'src/app/models/producto';
import { PagosService } from 'src/app/service/pagos.service';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-nueva-venta',
  templateUrl: './nueva-venta.component.html',
  styleUrls: ['./nueva-venta.component.css'],
})
export class NuevaVentaComponent implements OnInit {
  productos: ProductoVentaData[] = [];
  productosVenta: ProductoVenta[] = [];
  tipoPago: string = 'Tipo de Pago';
  codeBar: string = '';
  cantidad: number = 1;
  productoSeleccionadoModal: ProductoVentaData = {
    nombre: '',
    cantidad: 0,
    codeBar: '',
    img: '',
    total: 0,
  };
  productoSeleccionado: ProductoVenta = {
    nombre: '',
    cantidad: 0,
  };
  currentPage = 1;
  pageSize = 5;

  constructor(
    private ventaService: PagosService,
    private productoService: ProductosService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  saveVentas() {
    if (this.tipoPago == 'Tipo de Pago') {
      alert('Select payment type');
    } else if (!this.productosVenta.length) {
      alert('No Products Added');
    } else {
      const ventas: Ventas = {
        tipoPago: this.tipoPago,
        productos: this.productosVenta,
        fecha: new Date(),
        total: 0,
      };
      this.ventaService.saveVentas(ventas).subscribe(
        (resp) => {
          this.ventaService.postCorteDiario().subscribe((resp) => {
            console.log('Corte');
          });
          window.location.reload();
          window.alert('Sale Saved');
        },
        (err) => console.error(err)
      );
    }
  }

  mostrarDetalles(index: number) {
    const productoSeleccionado = this.productos[index];
    this.productoSeleccionadoModal = productoSeleccionado;
  }

  removerProducto(index: number) {
    this.productos.splice(index, 1);
  }

  cambiarPagina() {}

  agregarProducto(producto: string) {
    const product: ProductoVentaData = {
      nombre: '',
      cantidad: 0,
      codeBar: '',
      img: '',
      total: 0,
    };
    const venta: ProductoVenta = {
      nombre: '',
      cantidad: 0,
    };

    this.productoService
      .getProduct(producto)
      .pipe(
        tap((data) => {
          if (!data || data instanceof HttpErrorResponse) {
            alert('Product Not Found');
            this.codeBar = '';
            this.cantidad = 1;
          }
        })
      )
      .subscribe((data) => {
        if (data.cantidad > this.cantidad - 1) {
          if (!this.productos.find((item) => item.codeBar === data.codeBar)) {
            product.total = this.cantidad * parseInt(`${data.precio}`);
            product.cantidad = this.cantidad;
            product.codeBar = data.codeBar;
            product.img = data.imagen;
            product.nombre = data.nombreProducto;
            venta.nombre = data.nombreProducto;
            venta.cantidad = this.cantidad;
            this.productos.push(product);
            this.productosVenta.push(venta);

            this.codeBar = '';
            this.cantidad = 1;
          }
        } else {
          alert('No inventory');
        }
      });
  }

  payPalConfig: IPayPalConfig = {
    clientId:
      'ATk6rT2zsBdbXvKX_0EtlTh9zoWJ-Feb_pXNDs9lU3BKj1UHd41XFjhaLVk8SE1iE7zBGRdN4DzeQbOR',
    currency: 'MXN',
    createOrderOnClient: (data) =>
      <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'MXN',
              value: this.getTotal().toString(),
              breakdown: {
                item_total: {
                  currency_code: 'MXN',
                  value: this.getTotal().toString(),
                },
              },
            },
            items: [
              {
                name: 'GYMONGO',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'MXN',
                  value: this.getTotal().toString(),
                },
              },
            ],
          },
        ],
      },
    advanced: {
      commit: 'true',
    },
    style: {
      label: 'pay',
      layout: 'vertical',
    },
    onApprove: (data, actions) => {
      console.log('Pago aprobado:', data, actions);
      // Realiza la captura del pago
      return actions.order.capture().then((details: any) => {
        console.log('Captura completada:', details);
        this.saveVentas();
        this.ventaService.postCorteDiario().subscribe((resp) => {
          console.log('Corte');
          window.location.reload();
        });
      });
    },
    onClientAuthorization: (data) => {
      console.log('Autorización de cliente:', data);
      // Muestra un mensaje de confirmación al usuario
    },
    onCancel: (data, actions) => {
      console.log('Pago cancelado:', data, actions);
      // Muestra un mensaje al usuario informando de la cancelación del pago
    },
    onError: (err) => {
      console.log('Error al procesar el pago:', err);
      alert('There is no product selected');
      // Muestra un mensaje al usuario informando del error
    },
    onClick: () => {
      console.log('Pago iniciado');
      // Realiza alguna acción cuando se inicia el proceso de pago
    },
    onShippingChange: (data, actions) => {
      console.log('Cambio de envío:', data, actions);
      // Realiza alguna acción cuando cambia la dirección de envío
    },
  };

  getTotal() {
    let total: number = 0;
    this.productos.forEach((item) => {
      total += item.total.valueOf();
    });
    return total.toFixed(2);
  }
}

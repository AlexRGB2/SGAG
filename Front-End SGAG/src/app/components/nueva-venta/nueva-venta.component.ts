// Elaboro Alexis Martinez, Oscar Rojas, Juan de Dios
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
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nueva-venta',
  templateUrl: './nueva-venta.component.html',
  styleUrls: ['./nueva-venta.component.css'],
})
export class NuevaVentaComponent implements OnInit {
  productos: ProductoVentaData[] = [];
  productosVenta: ProductoVenta[] = [];
  tipoPago: string = 'Payment Type';
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

  constructor(
    private ventaService: PagosService,
    private productoService: ProductosService,
    private http: HttpClient,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {}

  // Guarda una venta
  saveVentas() {
    // Verifica si el tipo de pago es 'Payment Type'
    if (this.tipoPago == 'Payment Type') {
      // Muestra un mensaje de error utilizando una librería de notificaciones llamada 'toast'
      this.toast.error('Select Payment Type', 'Error', { timeOut: 3000 });
      // Verifica si no se han agregado productos a la venta
    } else if (!this.productosVenta.length) {
      // Muestra un mensaje de error utilizando la librería de notificaciones 'toast'
      this.toast.error('No Products Added', 'Error', { timeOut: 3000 });
    } else {
      // Crea un objeto 'ventas' con los datos de la venta
      const ventas: Ventas = {
        tipoPago: this.tipoPago,
        productos: this.productosVenta,
        fecha: new Date(),
        total: 0,
      };
      // Realiza una llamada al servicio de venta para guardar la venta
      this.ventaService.saveVentas(ventas).subscribe(
        (resp) => {
          // Realiza una llamada adicional al servicio de venta para crear un corte diario
          this.ventaService.postCorteDiario().subscribe((resp) => {
            // Muestra un mensaje de éxito utilizando la librería de notificaciones 'toast'
            this.toast.success('Sale Success', 'OK', { timeOut: 3000 });
            // Recarga la página
            window.location.reload();
          });
        },
        (err) => console.error(err)
      );
    }
  }

  /**
   * Muestra los detalles de un producto seleccionado en un modal.
   * @param index - El índice del producto seleccionado en la lista de productos.
   */
  mostrarDetalles(index: number) {
    // Obtiene el producto seleccionado en base al índice proporcionado
    const productoSeleccionado = this.productos[index];
    // Asigna el producto seleccionado a una variable llamada 'productoSeleccionadoModal'
    this.productoSeleccionadoModal = productoSeleccionado;
  }

  /**
   * Remueve un producto del arreglo de productos en base a su índice.
   * @param index - El índice del producto a ser removido en el arreglo de productos.
   */
  removerProducto(index: number) {
    // Utiliza el método 'splice' para eliminar un elemento del arreglo en base a su índice
    // El segundo argumento '1' indica que se eliminará solo un elemento
    this.productos.splice(index, 1);
  }

  cambiarPagina() {}

  /**
   * Agrega un producto a dos arreglos diferentes en base a la cantidad y disponibilidad del producto.
   * @param producto - El código de barras o identificador del producto a ser agregado.
   */
  agregarProducto(producto: string) {
    // Crear objetos vacíos para el producto y la venta
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
    // Verificar que la cantidad sea mayor a 0
    if (this.cantidad > 0) {
      // Llamar al servicio para obtener los datos del producto
      this.productoService
        .getProduct(producto)
        .pipe(
          // Utilizar el operador 'tap' para manejar errores y mostrar mensajes
          tap((data) => {
            if (!data || data instanceof HttpErrorResponse) {
              this.toast.error('Product Not Found', 'Error', { timeOut: 3000 });
              this.codeBar = '';
              this.cantidad = 1;
            }
          })
        )
        .subscribe((data) => {
          // Verificar que la cantidad del producto sea mayor a la cantidad deseada
          if (data.cantidad > this.cantidad - 1) {
            // Verificar que el producto no exista ya en el arreglo 'this.productos'
            if (!this.productos.find((item) => item.codeBar === data.codeBar)) {
              // Calcular el total del producto en base a la cantidad y precio
              product.total = this.cantidad * data.precio;
              product.cantidad = this.cantidad;
              product.codeBar = data.codeBar;
              product.img = data.imagen;
              product.nombre = data.nombreProducto;
              venta.nombre = data.nombreProducto;
              venta.cantidad = this.cantidad;
              // Agregar el producto y la venta a los arreglos correspondientes

              this.productos.push(product);
              this.productosVenta.push(venta);

              this.codeBar = '';
              this.cantidad = 1;
            } else {
              const product: any = this.productos.find(
                (item: ProductoVentaData) => {
                  return item.nombre == data.nombreProducto;
                }
              );
              const productVenta: any = this.productosVenta.find(
                (item: ProductoVenta) => {
                  return item.nombre == data.nombreProducto;
                }
              );
              const index = this.productos.indexOf(product);
              const indexVenta = this.productosVenta.indexOf(productVenta);
              this.productos[index].cantidad += this.cantidad;
              this.productos[index].total =
                this.productos[index].cantidad * data.precio;
              this.productosVenta[indexVenta].cantidad += this.cantidad;
              this.codeBar = '';
              this.cantidad = 1;
            }
          } else {
            this.toast.error('No inventory', 'Error', { timeOut: 3000 });
            this.codeBar = '';
            this.cantidad = 1;
          }
        });
    } else {
      this.toast.error('Insert a Valid Number', 'Error', { timeOut: 3000 });
      this.codeBar = '';
      this.cantidad = 1;
    }
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
      // Realiza la captura del pago
      return actions.order.capture().then((details: any) => {
        this.saveVentas();
        this.ventaService.postCorteDiario().subscribe((resp) => {
          window.location.reload();
        });
      });
    },
    onCancel: (data, actions) => {
      // Muestra un mensaje al usuario informando de la cancelación del pago
      this.toast.info('Transaction Canceled', 'Canceled', { timeOut: 3000 });
    },
    onError: (err) => {
      // Muestra un mensaje al usuario informando del error
      this.toast.error('Check the sale data', 'Error', { timeOut: 3000 });
    },
  };

  getTotal() {
    let total: number = 0;
    this.productos.forEach((item) => {
      total += item.total.valueOf();
    });
    return total.toFixed(2);
  }

  validarNumero() {
    if (this.cantidad > 0) {
      this.toast.success('Product Added', 'OK', { timeOut: 3000 });
    } else {
      this.toast.error('Enter a Valid Amount', 'Error', { timeOut: 3000 });
    }
  }
}

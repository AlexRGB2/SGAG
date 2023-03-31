import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { VentasComponent } from './components/ventas/ventas.component';
import { ListaVentasComponent } from './components/lista-ventas/lista-ventas.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { CortesComponent } from './components/cortes/cortes.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    NavbarComponent,
    VentasComponent,
    ListaVentasComponent,
    CortesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LazyLoadImageModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    NgxPayPalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

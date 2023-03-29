import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CortesComponent } from './components/cortes/cortes.component';
import { ListaVentasComponent } from './components/lista-ventas/lista-ventas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { VentasComponent } from './components/ventas/ventas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/productos',
    pathMatch: 'full',
  },
  { path: 'productos', component: ProductosComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'listaVentas', component: ListaVentasComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'cortesDiarios', component: CortesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

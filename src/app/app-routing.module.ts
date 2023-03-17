import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'stock', component: StockComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},  // cuando no se le especifica nada entra en home
  {path: '**', component: Error}  // cuando no matchea con nada entra en error 404 - no encontrado
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

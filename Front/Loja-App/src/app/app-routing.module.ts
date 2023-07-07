import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModClientesComponent } from './mod-clientes/mod-clientes.component';
import { ClientesComponent } from './clientes/clientes.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  { path: 'mod-clientes', component: ModClientesComponent },
  {path: 'clientes', component: ClientesComponent},
  {path: '', component: IndexComponent}
  ];

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }

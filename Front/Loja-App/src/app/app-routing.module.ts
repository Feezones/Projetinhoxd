import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModClientesComponent } from './mod-clientes/mod-clientes.component';
import { ClientesComponent } from './clientes/clientes.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';




@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  //imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }

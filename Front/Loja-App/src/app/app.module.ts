import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModClientesComponent } from './mod-clientes/mod-clientes.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'mod-clientes', component: ModClientesComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'index', component: IndexComponent },
  { path: '', component: IndexComponent }
  // outras rotas...
];


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    NavbarComponent,
    ModClientesComponent,
    IndexComponent,
    FooterComponent,
    LoginComponent,
    CadastroComponent,
  ],
  imports: [
    RouterModule.forRoot(routes) ,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

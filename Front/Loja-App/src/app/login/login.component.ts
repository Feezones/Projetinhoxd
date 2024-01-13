import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  constructor(private router: Router) { }

  redirecionarParaCadastro() {
    this.router.navigate(['/cadastro']); // redireciona para a rota 'cadastro'
  }
}
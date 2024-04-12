import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent {
  usuarioData = {
    nome: '',
    sobrenome: '',
    email: '',
    cpf: '',
    endereco: '',
    senha: '',
    confSenha: ''
    };

  
  constructor(private router: Router,private dataService: DataService) { }

  cadastrarUsuario(): void {
    var resposta = (this.dataService.cadastrarUsuario(this.usuarioData))
    console.log(this.usuarioData)
    console.log(resposta)
  }

  redirecionarParaLogin() {
    this.router.navigate(['/login']); // redireciona para a rota 'login'
  }
}

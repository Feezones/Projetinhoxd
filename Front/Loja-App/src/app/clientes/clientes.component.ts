import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from './service/clienteService';
import { Cliente } from './clientes/Cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})

export class ClientesComponent {

  cliente: Cliente = new Cliente('', '', '', '', '', '', '');

  constructor(private http:HttpClient,private formBuilder: FormBuilder,private clienteService: ClienteService){}

  validarFormulario(): boolean {
    // Implemente suas validações personalizadas aqui
    return true; // Retorne true se o formulário estiver válido, caso contrário, retorne false
  }

  submitForm(){
      this.clienteService.adicionarCliente(this.cliente).subscribe(
        response => {
          console.log('Cliente adicionado com sucesso:', response);
          // Lógica adicional após a adição do cliente
        },
        error => {
          console.error('Erro ao adicionar cliente:', error);
          // Lógica de tratamento de erro
        })
  }
}

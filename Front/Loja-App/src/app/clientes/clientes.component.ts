import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})

export class ClientesComponent {

  public formulario!: FormGroup;

  constructor(private http:HttpClient,private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required]],
      sobrenome: ['',  [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['',  [Validators.required]],
      endereco: ['',  [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      confsenha: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(10)]]
    });
  }

  nome!:string;
  sobrenome!:string;
  cpf!:string
  email!:string
  endereco!:string
  senha!:string
  confsenha!:string

  enviarForm(){
    const dados = {
      nome:[this.nome,[Validators.required]],
      sobrenome:this.sobrenome,
      cpf:this.cpf,
      email:this.email,
      endereco:this.endereco,
      senha:this.senha,
      confsenha:this.confsenha,
    };

    this.http.post('https://localhost:5001/api/Clientes',dados)
      .subscribe(response =>{
        console.log("ola")
        console.log(response);
      },
      error => {
        if(this.cpf == null || this.cpf == "" ){
          console.log(error,"campo cpf")
        }
        console.log("oi")
        console.log(error);
      })
  }


  resetarFormulario() {
    this.nome = '';
    this.sobrenome = '';
    this.cpf = '';
    this.email = '';
    this.endereco = '';
    this.senha = '';
    this.confsenha = '';

  }

  public getClientes():void{
    this.http.get('https://localhost:5001/api/Clientes')
    .subscribe(response => console.log(response))
   }

}

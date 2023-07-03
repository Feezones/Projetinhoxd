import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {
  constructor(private http:HttpClient){}


  nome!:string;
  email!:string


  enviarForm(){
    const dados = {
      nome:this.nome,
      email:this.email
    };

    this.http.post('https://localhost:5001/api/Clientes',dados)
      .subscribe(response =>{
        console.log(response);
      },
      error => {
        console.log(error);
      })

      this.resetarFormulario();
  }

  resetarFormulario() {
    this.nome = '';
    this.email = '';
  }



  public getClientes():void{
    this.http.get('https://localhost:5001/api/Clientes')
    .subscribe(response => console.log(response))
   }

}

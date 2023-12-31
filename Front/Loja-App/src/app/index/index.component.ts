import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  public clientes: any =[];
  public clientesFiltrados: any = [];
  private _filtroLista:string = '';

  public get filtroLista(): string{
    return this._filtroLista;
  }

  public set filtroLista(value: string){
    this._filtroLista = value;
    this.clientesFiltrados = this.filtroLista ? this.filtrarClientes(this.filtroLista) : this.clientes;
  }

  filtrarClientes(filtrarPor: string): any{
    filtrarPor = filtrarPor.toLowerCase();
    return this.clientes.filter(
      (cliente: any) => cliente.nome.toLowerCase().indexOf(filtrarPor) !== -1 ||
                        cliente.sobrenome.toLowerCase().indexOf(filtrarPor) !== -1 ||
                        cliente.cpf.toLowerCase().indexOf(filtrarPor) !== -1 ||
                        cliente.email.toLowerCase().indexOf(filtrarPor) !== -1 ||
                        cliente.endereco.toLowerCase().indexOf(filtrarPor) !== -1
    )
  }


  constructor(private http: HttpClient){}

  ngOnInit(): void {  //ao iniciar chama o metodo getEventos/todos os metodos q tiverem listados
    this.getClientes();
  }

  public getClientes():void{
    this.http.get('https://localhost:5001/api/Clientes').subscribe(
      response =>{
        this.clientes = response;
        this.clientesFiltrados = this.clientes,
        console.log(this.clientes,this.clientesFiltrados)
      },
      error => console.log(error),
    );
  }
}

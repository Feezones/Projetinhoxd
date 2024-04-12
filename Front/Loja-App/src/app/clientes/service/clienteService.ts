import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'https://localhost:7121/api/Clientes'; // Seu endpoint API

  constructor(private http: HttpClient) { }

  // Método para enviar dados usando POST
  adicionarCliente(clienteData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, clienteData);
  }
}

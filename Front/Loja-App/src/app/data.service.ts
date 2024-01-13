import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'https://localhost:7121/api/Clientes';

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200/' // Substitua pela sua origem
  });

  resposta:any = "Resposta: "



  cadastrarUsuario(usuarioData: any) {
    const valueJSON ={
      header: this.headers,
      usuarioData
    }
    try{
      this.http.post(this.apiUrl, valueJSON)
      .subscribe(
        
        (data) => {
          this.resposta += data;
        },
        (error) =>{
          this.resposta += error;
        }
      )
      return this.resposta
    }catch(e){
      return this.resposta += e
    }
  }
}

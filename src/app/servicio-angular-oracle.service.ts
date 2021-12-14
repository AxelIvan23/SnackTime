import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicioAngularOracleService {

  constructor(private http: HttpClient) { }
  usuarios : any[] = [];

  private cargarUsuarios() {
    this.http.get('http://localhost:4021/users')
    .subscribe((resp: any[]) => {
      this.usuarios = resp;
      console.log(this.usuarios);
    });
  }
}

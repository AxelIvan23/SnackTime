import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioAngularOracleService {

  url: string = "http://localhost:4201";
  constructor(private httpClient: HttpClient) { }

  get(query : string ): Observable<any>{
    return this.httpClient.get(this.url+"/"+query) as Observable<any>;
  }

  create(newRow: any): void {
    this.httpClient.post(this.url + `/create`, newRow).subscribe(() => console.log('Update Exitoso'));
  }
}

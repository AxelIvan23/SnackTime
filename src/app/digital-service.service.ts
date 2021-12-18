import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DigitalServiceService {

   url: string = "http://localhost:4201";

   constructor(private httpClient: HttpClient) { }

   get(query : string): Observable<any[]> {
       return this.httpClient.get(this.url+"/"+query) as Observable<any[]>;
   }
}

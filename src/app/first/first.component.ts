import { Component, OnInit } from '@angular/core';
import { ServicioAngularOracleService } from '../servicio-angular-oracle.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  nombre1:string;
  nombre2:string;
  nombre3:string;
  nombre4:string;
  inf:string;
  Mexicanos:any=["1.","2.","3.","4.","5."]
  Cafes:any=["1.","2.","3.","4.","5."]
  Mariscos:any=["1.","2.","3.","4.","5."]
  Italianos:any=["1.","2.","3.","4.","5."]
  constructor(private service : ServicioAngularOracleService) {
    this.nombre1="Los mejores restaurantes Mexicanos";
    this.nombre2="Los mejores cafes";
    this.nombre3="Los mejores mariscos en playas";
    this.nombre4="Los mejores lugares italianos";
    this.inf="Top 5"
   }

  ngOnInit(): void {
    this.service.get("select").subscribe(data => {
      console.log(data);
      this.Mexicanos = data;
      console.log(this.Mexicanos);
    })
    this.service.get("select2").subscribe(data => {
      console.log(data);
      this.Cafes = data;
      console.log(this.Cafes);
    })
    this.service.get("select3").subscribe(data => {
      console.log(data);
      this.Mariscos = data;
      console.log(this.Mariscos);
    })
    this.service.get("select4").subscribe(data => {
      console.log(data);
      this.Italianos = data;
      console.log(this.Italianos);
    })
  }

}
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
  desayunos:any=["1.","2.","3.","4.","5."]
  carnes:any=["1.","2.","3.","4.","5."]
  postres:any=["1.","2.","3.","4.","5."]
  especialidades:any=["1.","2.","3.","4.","5."]
  constructor(private service : ServicioAngularOracleService) {
    this.nombre1="Las mejores vistas";
    this.nombre2="Los mejores cafes";
    this.nombre3="Los mejores mariscos en playas";
    this.nombre4="Los mejores lugares rusticos";
    this.inf="Top 5"
   }

  ngOnInit(): void {
    this.service.get("select").subscribe(data => {
      console.log(data);
      this.desayunos = data;
      console.log(this.desayunos);
    })

  }

}
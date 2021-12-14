import { Component, OnInit } from '@angular/core';

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
  desayunos:string[]=["1.","2.","3.","4.","5."]
  carnes:string[]=["1.","2.","3.","4.","5."]
  postres:string[]=["1.","2.","3.","4.","5."]
  especialidades:string[]=["1.","2.","3.","4.","5."]
  constructor() {
    this.nombre1="Las mejores vistas";
    this.nombre2="Los mejores cafes";
    this.nombre3="Los mejores mariscos en playas";
    this.nombre4="Los mejores lugares rusticos";
    this.inf="Top 5"
   }

  ngOnInit(): void {
  }

}

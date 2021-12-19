import { Component, OnInit } from '@angular/core';
import { ServicioAngularOracleService } from '../servicio-angular-oracle.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sixcomponent',
  templateUrl: './sixcomponent.component.html',
  styleUrls: ['./sixcomponent.component.css']
})
export class SixcomponentComponent implements OnInit {

  constructor(private service : ServicioAngularOracleService) { }

  ngOnInit(): void {
  }

  createRow(){
    this.service.get("actualizar").subscribe(data => {
      console.log(data);
    })
  }

  
}

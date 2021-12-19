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

  createRow(empresa, fecha, pais, telefono, email, contrasena){
    console.log(contrasena);
    const row = {
      empresa: empresa,
      fecha: fecha,
      pais: pais,
      telefono: telefono,
      email: email,
      contrasena: contrasena
    }
    this.service.create(row);
  }

  
}

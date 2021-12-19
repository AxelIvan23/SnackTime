import { Component, OnInit } from '@angular/core';
import { ServicioAngularOracleService } from '../servicio-angular-oracle.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})
export class IniciarsesionComponent implements OnInit {

  constructor(private service : ServicioAngularOracleService) { }

  ngOnInit(): void {
  }

createRow(nombre, description, tipo, logo, ciudad, calle, fraccionamiento, ext, cp, latitud, longitud){
    //console.log(contrasena);
    const row = {
      nombre: nombre,
      descripcion: description,
      tipo: tipo,
      logo: logo,
      ciudad: ciudad,
      calle: calle,
      fraccionamiento: fraccionamiento,
      ext: ext,
      cp: cp,
      latitud: latitud,
      longitud: longitud
    }
    this.service.create2(row);
  }
}

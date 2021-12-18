import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpHeaders } from '@angular/common/http';
import { ServicioAngularOracleService } from '../servicio-angular-oracle.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  lat = 51.678418;
  lng = 7.809007;
  options: any;
  overlays: any[];

  displayedColumns = ['NOMBRE', 'DESCRIPCION', 'TIPO'];

  //DataSource para popular la tabla
  dataSource = new MatTableDataSource<any>();
  data : any = [];

  marker= new google.maps.Marker();

  constructor(private _service: ServicioAngularOracleService) { }

  ngOnInit(): void {
  	this.dataSource.data = this.data;
  	this.options = {
        center: {lat: 36.890257, lng: 30.707417},
        zoom: 12
    };
    
  }

  buscar(lat:String, lngt:String) {
  	 if (lngt=="" || lat== "")
  	 	return;
  	this._service.get("BusCoord/"+lat+"/"+lngt).subscribe(data => {
  		this.dataSource.data = data; 
  	});
  }

  lugar(direccion: string,map) {
  	if (direccion =="")
  		return;
  	this.geocode({address:direccion},map);
  }

  geocode(request: google.maps.GeocoderRequest, map): void {
    this.marker.setMap(null);
    const geocoder = new google.maps.Geocoder();
    const infowindow = new google.maps.InfoWindow();
    geocoder.geocode(request, function (response, result) {
      console.log(response);
      map.setCenter(response[0].geometry.location);
      this.marker = new google.maps.Marker({
          position: response[0].geometry.location,
          map: map,
       });
    })
}

  zoomIn(map) {
  	this.marker.setMap(null);
  	const geocoder = new google.maps.Geocoder();
    const infowindow = new google.maps.InfoWindow();
    const latlng = {
	    lat: parseFloat('40.714224'),
	    lng: parseFloat('-73.961452'),
	};

  	const maps: google.maps.Map = map;
	geocoder.geocode({ location: latlng }, function (response, result) {
      if (result=="OK") {
        map.setZoom(11);

        this.marker = new google.maps.Marker({
          position: latlng,
          map: map,
        });

        console.log(response);
        infowindow.setContent(response[0].formatted_address);
        infowindow.open(map, this.marker);
      } else {
        window.alert("No results found");
      }
    });
  }
}

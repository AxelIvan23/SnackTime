import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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

  displayedColumns = ['position', 'name', 'weight', 'symbol'];

  //DataSource para popular la tabla
  dataSource = new MatTableDataSource<any>();
  data : any = [];

  ELEMENT_DATA: any = [
	  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
	  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
	  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
	  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
	  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
	  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
	  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
	  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
	  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
	  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  constructor() { }

  ngOnInit(): void {
  	this.dataSource.data = this.data;
  	this.options = {
        center: {lat: 36.890257, lng: 30.707417},
        zoom: 12
    };

    
  }

  buscar(lngt:String, lat:String) {
  	alert("leonor?");
  	 if (lngt=="" || lat== "")
  	 	alert("Puto");
  }

  zoomIn(map) {
  	const geocoder = new google.maps.Geocoder();
    const infowindow = new google.maps.InfoWindow();
    const latlng = {
	    lat: parseFloat('40.714224'),
	    lng: parseFloat('-73.961452'),
	};

  	const maps:google.maps.Map = map;
	geocoder.geocode({ location: latlng }, function (response, result) {
      if (result=="OK") {
        map.setZoom(11);

        const marker = new google.maps.Marker({
          position: latlng,
          map: map,
        });

        console.log(response);
        infowindow.setContent(response[0].formatted_address);
        infowindow.open(map, marker);
      } else {
        window.alert("No results found");
      }
    });
  }
}

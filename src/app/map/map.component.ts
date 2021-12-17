import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  	this.options = {
        center: {lat: 36.890257, lng: 30.707417},
        zoom: 12
    };

    
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

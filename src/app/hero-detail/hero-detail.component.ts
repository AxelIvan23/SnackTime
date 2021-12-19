import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/Router';
import { ServicioAngularOracleService } from '../servicio-angular-oracle.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  
  Info: any;
  Empresa: any;
  lat = 51.678418;
  lng = 7.809007;
  options: any;
  overlays: any;
  Rank;

  constructor(private _activatedRoute: ActivatedRoute, private _service: ServicioAngularOracleService, private _router: Router) {
     this._activatedRoute.params.subscribe( param =>  {
  		//this.hero = this._heroService.getHeroe(param['id']);
  		this._service.get("detalles/"+param['id']).subscribe(data => {
  			this.Info = data[0];
  			console.log(data);
  			this._service.get("empresa/"+this.Info.EMPRESAID).subscribe(data => {
	  			this.Empresa = data[0];
	  			console.log(data);
	  		});
	  		this.lat=this.Info.LATITUD;
	  		this.lng=this.Info.LONGITUD;
	  		this.options = {
		        center: {lat: this.lat, lng: this.lng},
		        zoom: 12
		    };
		    this.overlays = [
            	new google.maps.Marker({position: {lat: this.lat, lng: this.lng}, title:this.Info.NOMBRE}),
            ]
            this.Rank = Array(this.Info.RANKING).fill(3);
  		});
  		
  	})
  }
  

  ngOnInit(): void {

  }
  

}

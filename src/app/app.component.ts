import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombreSitio: string;
  busqueda: string;
  title = 'SPICYO|Sabor a la parrilla';

  constructor() {
    this.nombreSitio = '';
    this.busqueda = 'cscfa';
  }
}

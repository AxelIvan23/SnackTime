import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import {GMapModule} from 'primeng/gmap';

import {RouterModule} from '@angular/router';
import { Router } from "@angular/router"; 

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { TerceroComponent } from './tercero/tercero.component';
import { FormsModule } from '@angular/forms';
import { FourtComponent } from './fourt/fourt.component';
import { FilterPipe } from './pipes/filter.pipe';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { FiveComponent } from './five/five.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { SixcomponentComponent } from './sixcomponent/sixcomponent.component'; 
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    TerceroComponent,
    FourtComponent,
    FilterPipe,
    IniciarsesionComponent,
    FiveComponent,
    HeroDetailComponent,
    SixcomponentComponent,
    HeaderComponent,
    FooterComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    GMapModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule,
    GooglePlaceModule,
    RouterModule.forRoot([
      {path: '', component: FirstComponent},
      {path: 'acerca', component: SecondComponent},
      {path: 'buscar', component: TerceroComponent},
      {path: 'contactanos', component: FourtComponent},
      {path: 'iniciar', component: FiveComponent},
      {path: 'registrarse', component: SixcomponentComponent},
      {path: '**', pathMatch: 'full', component: FirstComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

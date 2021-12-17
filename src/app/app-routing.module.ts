import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { FirstComponent} from './first/first.component';
import { SecondComponent} from './second/second.component';
import { TerceroComponent} from './tercero/tercero.component';
import { FourtComponent} from './fourt/fourt.component';
import { SixcomponentComponent } from './sixcomponent/sixcomponent.component';
import { FiveComponent} from './five/five.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';



const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent}, 
  { path: 'tercero-component', component: TerceroComponent},
  { path: 'fourt-component', component: FourtComponent},
  { path: 'iniciar-sesion',component: FiveComponent},
  { path: 'six-component', component: SixcomponentComponent},
  { path: 'perfil-Empresa', component: HeroDetailComponent},
  { path: 'registrar-Restaurante', component: IniciarsesionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

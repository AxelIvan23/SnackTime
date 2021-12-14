import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tercero',
  templateUrl: './tercero.component.html',
  styleUrls: ['./tercero.component.css']
})
export class TerceroComponent implements OnInit {

   nombre1:string;
   nombre2:string;
   nombre3:string;
   nombre4:string;
   inf:string;
   desayunos:string[]=["1.","2.","3.","4.","5."]
   carnes:string[]=["1.","2.","3.","4.","5."]
   postres:string[]=["1.","2.","3.","4.","5."]
   especialidades:string[]=["1.","2.","3.","4.","5."]
  constructor() {
   this.nombre1="Las mejores vistas";
   this.nombre2="Los mejores cafes";
   this.nombre3="Los mejores mariscos en playas";
   this.nombre4="Los mejores lugares rusticos";
   this.inf="Top 5"
   }

  filterPost = '';

  posts = [
    {
       "id": 1,
       "title": "Hot Cakes",
       "clasif": "Desayuno",
       "ingredienteseEx": "Mermelada, Harina, Leche, Mantequilla",
    },
    {
       "id": 2,
       "title": "Huevos Revueltos",
       "clasif": "Desayuno",
       "ingredienteseEx": "2 pz Huevos, Tosino",
    },
    {
       "id": 3,
       "title": "Licuados",
       "clasif": "Desayuno",
       "ingredienteseEx": "Leche, Fruta como de prefiera",
    },
    {
       "id": 4,
       "title": "Tostadas",
       "clasif": "Desayuno",
       "ingredienteseEx": "Ceviche",
    },
    {
       "id": 5,
       "title": "Arrachera",
       "clasif": "Carnes",
       "ingredienteseEx": "Ajo picado, Aceite de maíz, Cerveza clara, Arrachera",
    },
    {
       "id": 6,
       "title": "Porterhouse",
       "clasif": "Carnes",
       "ingredienteseEx": "Vino tinto, Echalotes picado, Mantequilla sin sal",      
    },
    {
       "id": 7,
       "title": "Rib Eye",
       "clasif": "Carnes",
       "ingredienteseEx": "Vino tinto, Echalotes picado, Mantequilla sin sal",     
    },
    {
       "id": 8,
       "title": "Solomillo",
       "clasif": "Carnes",
       "ingredienteseEx": "Solomillo de Cerdo, Pimienta",     
    },
    {
       "id": 9,
       "title": "Picaña",
       "clasif": "Carnes",
       "ingredienteseEx": "Picaña en Trozos, Pimienta",     
    },
    {
       "id": 10,
       "title": "Donas",
       "clasif": "Postres",
       "ingredienteseEx": "Glaseado sabor Fresa, Chocolate",     
    },
    {
       "id": 11,
       "title": "Pastel de Lava",
       "clasif": "Postres",
       "ingredienteseEx": "Cocoa, Chocolate SemiAmargo",     
    },
    {
       "id": 12,
       "title": "Pay de Limon",
       "clasif": "Postres",
       "ingredienteseEx": "Jugo de Limon, Rayadura de Limon, Galletas Marias",  
    },
    {
       "id": 13,
       "title": "Magdalenas Caseras",
       "clasif": "Postres",
       "ingredienteseEx": "Leche Entera, Chocolate",  
    },
    {
       "id": 14,
       "title": "Shack Burger de Queso",
       "clasif": "Especialidades",
       "ingredienteseEx": "Shack Sauce",  
    },
    {
       "id": 15,
       "title": "Patty Bun",
       "clasif": "Especialidades",
       "ingredienteseEx": "Pollo, Jamon de Pechuga de Pollo",  
    },
    {
       "id": 16,
       "title": "Hamburguesas Hamburgo y Berlín",
       "clasif": "Especialidades",
       "ingredienteseEx": "Carne Molida, Huevo",  
    },
    {
       "id": 17,
       "title": "Hamburguesas Vegetarianas",
       "clasif": "Especialidades",
       "ingredienteseEx": "Soya, Avena",  
    }
  ]
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{
  heroeBorrado: string='';

  heroes: string[] = ['Spiderman', 'Ironman','Hulk','Thor', 'Batman'];
  

  borrarHeroe(){
  
    //this.heroes.shift  elmina el primer elemento de la lista 
    //this.heroeBorrado = this.heroes.splice(0,1);
    this.heroeBorrado = this.heroes.shift() || '';

    console.log(this.heroeBorrado);

  }
  
}

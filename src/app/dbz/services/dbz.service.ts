import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class Dbzservice {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 75800
        }
      ];

    get personajes(): Personaje[] {
      return [...this._personajes]; 
    }

    constructor(){}
    
    agregarPersonaje( personaje: Personaje){
      this._personajes.push(personaje);
    }


}



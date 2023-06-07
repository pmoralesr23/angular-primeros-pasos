import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main-page.component.html'
})

export class MainPageComponent{
    //llamando al servicio hacemos la inyeccion de dependencia
    constructor(private dbzService: DbzService) {}

    get characters(): Character[] {
        //? por lo general no se quiere modificar los datos directos del servicio
        //? por lo que usamos el spread para crear una copia para cada objeto
        //? pero en caso de venir de una base de datos no es necesario
        return [...this.dbzService.characters];
    }
    onDeleteCharacter( id: string ): void{
        this.dbzService.deleteCharacterById(id);
    }
    onNewCharacter( charater: Character):void {
        this.dbzService.addCharacter(charater);
    }
}
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

console.log('UUID:', uuid())
@Injectable({providedIn: 'root'})
export class DbzService {
    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Krilin',
            power: 1000
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 9500
        },
        {
            id: uuid(),
            name: 'Vegeta',
            power: 8000
        },
    ];
    
    addCharacter( character: Character):void {
        //!con el spred tomo todas las caracteristicas de un objeto y los pongo en cualquier lugar
        const newCharacter: Character = { ...character, id: uuid() };
        this.characters.push(newCharacter);
    }
    deleteCharacterById(id: string):void {
        this.characters = this.characters.filter( character => character.id !== id)
    }
    constructor() { }
}
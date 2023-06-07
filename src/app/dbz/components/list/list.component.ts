import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 100
    }
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeletCharacter(id:string ): void {
    //! onDeletCharacter(id:string ): void { if ( !id ) return; aqui se hace de la segunda manera recibiendo un id vacio
    console.log('Character eliminated:', id);
    this.onDelete.emit(id);
  }
}

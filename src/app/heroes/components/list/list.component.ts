import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
    public heroNames: string[] = ['Luffy', 'Sangi', 'Zoro', 'Chopper', 'Ussop'];
    public deletedHero?: string;

    removeLastHero(): void {
      this.deletedHero = this.heroNames.pop();
      console.log(this.deletedHero);
    }
}

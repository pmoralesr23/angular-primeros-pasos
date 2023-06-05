import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:  string = 'zoro';
  public age:   number = 21;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${ this.name } - ${ this.age }`;
  }

  noFunction(): void{
    throw 'metodo no implementado'
  }

  changeHero(): void {
    this.name = 'luffy';
  }

  changeAge(): void {
    this.age = 19;
  }

  reset(): void{
    this.name = 'zoro';
    this.age = 21;
    /*document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML = '<h1>Desde Angular</h1>';
    })*/
  }
}

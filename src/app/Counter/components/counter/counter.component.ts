import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h1>Hola Counter</h1>
        <h3>Counter: {{ counter }}</h3>

        <button (click)="increaseBy(-1)">-1</button>
        <button (click)="resetCounter()">Resetear</button>
        <button (click)="increaseBy(+1)">+1</button>
    `
})

export class CounterComponent {
    public counter: number = 10;

    /* Mi forma
    increaseBy(value: number):void {
        value += 1;
        this.counter = value;
    }
    decreaseBy(value: number):void {
        value -= 1;
        this.counter = value;
    }*/
    increaseBy(value: number):void {
        this.counter += value;
    }
    resetCounter(): void {
        this.counter = 10;
    }
}
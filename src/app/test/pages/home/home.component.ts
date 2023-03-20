import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  nesimo!: number | null;
  multiples3: Array<number> = [];
  primos: Array<number> = [];

  constructor() { }

  getEnesimo( event: any ) {
    this.nesimo = event;
    if( this.nesimo ) {
      this.getMultples();
      this.getPrimos();
    }
  }

  getMultples() {
    const isMultiple = (value: number, mult: number) =>  ( value % mult === 0 ) ? true : false;

    this.multiples3= [];

    for(let i = 1; this.multiples3.length < this.nesimo! ; i++ ) {
        if(isMultiple(i,3)) {
          this.multiples3.push(i);
        }
    }
  }

  getPrimos() {
    const primo = (value: number) => {
      for (let i = 2; i < value; i++) {
        if (value % i === 0)  return false;
      }
      return value !== 1;
    }

    this.primos = [];

    for ( let i= 2 ; this.primos.length < this.nesimo! ; i++) {
      if (primo(i)) {
        this.primos.push(i);
      }
    }
  }
}
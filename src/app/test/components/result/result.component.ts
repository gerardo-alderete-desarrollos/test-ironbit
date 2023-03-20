import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styles: [
  ]
})
export class ResultComponent {
   @Input() nesimo!: number | null;
   @Input() multiples3!: Array< number> | null ;
   @Input() primos!: Array< number> | null ;

  constructor() { }

}

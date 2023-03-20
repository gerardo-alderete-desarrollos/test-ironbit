import { Component, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent {
  @Output() value = new EventEmitter<number | any>();
  form: FormGroup;

  constructor(private fb: FormBuilder, private el: ElementRef) { 
    this.form = this.fb.group({
      nesimo: new FormControl( '', [ Validators.required, Validators.min(0) ])
    });

    this.nesimo?.valueChanges.subscribe( nesimo => {
      if( nesimo ) {
        this.emitResult(null);
      }
    })
  }

  calcular(){
    if( this.nesimo ) {
      this.emitResult(this.nesimo?.value);
      this.form.reset();
      const inputNesimo = this.el.nativeElement.querySelectorAll('#nesimo');
      (<HTMLInputElement>inputNesimo[0]).focus();
    }

    return
  }

  get nesimo(){  return this.form.get('nesimo') }

  emitResult(nesimo: number | null) {
    this.value.emit(nesimo);
  }
}

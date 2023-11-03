import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDisplayGreen]'
})
export class DisplayGreenDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'green';
  }

}

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDisplayGrey]'
})
export class DisplayGreyDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = '#F7EFE5';
  }

}

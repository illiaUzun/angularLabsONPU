import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appGender]'
})
export class GenderDirective implements OnInit {
  @Input('appGender') gender: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.gender === 'male'
      ? (this.el.nativeElement.textContent += '👱🏻')
      : (this.el.nativeElement.textContent += '👩🏻');
  }
}

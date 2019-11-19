import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() btnLable: string;
  @Output() onclick = new EventEmitter<any>();

  onClickButton(event) {
    this.onclick.emit(event);
  }
}

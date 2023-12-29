import { Component, EventEmitter, Output } from '@angular/core';
import { MediumTextComponent } from '../medium-text/medium-text.component';

@Component({
  selector: 'app-medium-text-button',
  standalone: true,
  templateUrl: './medium-text-button.component.html',
  styleUrl: './medium-text-button.component.scss',
  imports: [MediumTextComponent],
})
export class MediumTextButtonComponent {
  @Output() click = new EventEmitter<Event>();

  onClick(event: Event) {
    event.stopPropagation();
    this.click.emit(event);
  }
}

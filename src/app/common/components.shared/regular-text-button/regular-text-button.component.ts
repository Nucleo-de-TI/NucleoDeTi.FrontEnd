import { Component, EventEmitter, Output } from '@angular/core';
import { RegularTextComponent } from '../regular-text/regular-text.component';

@Component({
  selector: 'app-regular-text-button',
  standalone: true,
  templateUrl: './regular-text-button.component.html',
  styleUrl: './regular-text-button.component.scss',
  imports: [RegularTextComponent],
})
export class RegularTextButtonComponent {
  @Output() click = new EventEmitter<Event>();

  onClick(event: Event) {
    event.stopPropagation();
    this.click.emit(event);
  }
}

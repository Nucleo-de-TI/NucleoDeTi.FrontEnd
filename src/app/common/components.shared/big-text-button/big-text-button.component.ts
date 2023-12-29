import { Component, EventEmitter, Output } from '@angular/core';
import { BigTextComponent } from '../big-text/big-text.component';

@Component({
  selector: 'app-big-text-button',
  standalone: true,
  templateUrl: './big-text-button.component.html',
  styleUrl: './big-text-button.component.scss',
  imports: [BigTextComponent],
})
export class BigTextButtonComponent {
  @Output() click = new EventEmitter<Event>();

  onClick(event: Event) {
    event.stopPropagation();
    this.click.emit(event);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BorderTextButtonComponent } from '../border-text-button/border-text-button.component';
import { MediumTextComponent } from '../medium-text/medium-text.component';
import { IRegularBorderTextLoadButton } from '../../../models/border-text-load-button/border-text-load-button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-border-text-load-button',
  standalone: true,
  templateUrl: './border-text-load-button.component.html',
  styleUrl: './border-text-load-button.component.scss',
  imports: [CommonModule, BorderTextButtonComponent, MediumTextComponent],
})
export class BorderTextLoadButtonComponent {
  @Input() model!: IRegularBorderTextLoadButton;
  @Output() click = new EventEmitter<Event>();

  onClick(event: Event) {
    event.stopPropagation();

    if (this.model.loading) {
      return event.preventDefault();
    }

    this.click.emit(event);
  }
}

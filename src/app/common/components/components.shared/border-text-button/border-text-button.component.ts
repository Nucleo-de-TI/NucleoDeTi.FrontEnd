import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RegularHorizontalPaddingComponent } from '../regular-horizontal-padding/regular-horizontal-padding.component';
import { RegularTextComponent } from '../regular-text/regular-text.component';
import { IBorderTextButton } from '../../../models/border-text-button/border-text-button';

@Component({
  selector: 'app-border-text-button',
  standalone: true,
  templateUrl: './border-text-button.component.html',
  styleUrl: './border-text-button.component.scss',
  imports: [RegularHorizontalPaddingComponent, RegularTextComponent],
})
export class BorderTextButtonComponent implements OnInit {
  @Input() model?: IBorderTextButton;
  @Output() click = new EventEmitter<Event>();
  private _linkClassController = {
    '--filled': false,
  };

  get linkClassController() {
    return this._linkClassController;
  }

  ngOnInit(): void {
    if (this.model && this.model.style && this.model.style.filled) {
      this._linkClassController['--filled'] = this.model.style.filled;
    }
  }

  onClick(event: Event) {
    event.stopPropagation();
    this.click.emit(event);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { RegularTextLinkComponent } from '../regular-text-link/regular-text-link.component';
import { SmallVerticalPaddingComponent } from '../small-vertical-padding/small-vertical-padding.component';
import { RegularHorizontalPaddingComponent } from '../regular-horizontal-padding/regular-horizontal-padding.component';
import { RegularTextComponent } from '../regular-text/regular-text.component';
import { IBorderTextButton } from '../../../models/border-text-button/border-text-button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-border-text-link',
  standalone: true,
  templateUrl: './border-text-link.component.html',
  styleUrl: './border-text-link.component.scss',
  imports: [
    CommonModule,
    RegularTextLinkComponent,
    SmallVerticalPaddingComponent,
    RegularHorizontalPaddingComponent,
    RegularTextComponent,
  ],
})
export class BorderTextLinkComponent implements OnInit {
  @Input() href?: string;
  @Input() target?: string;
  @Input() download?: boolean;
  @Input() model?: IBorderTextButton;
  private _linkClassController = {
    '--filled': false,
  };

  ngOnInit(): void {
    if (this.model && this.model.style && this.model.style.filled) {
      this._linkClassController['--filled'] = this.model.style.filled;
    }
  }

  get linkClassController() {
    return this._linkClassController;
  }
}

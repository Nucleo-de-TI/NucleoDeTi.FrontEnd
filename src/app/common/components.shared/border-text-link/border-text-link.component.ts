import { Component, Input, OnInit } from '@angular/core';
import { RegularTextLinkComponent } from '../regular-text-link/regular-text-link.component';
import { SmallVerticalPaddingComponent } from '../small-vertical-padding/small-vertical-padding.component';
import { RegularHorizontalPaddingComponent } from '../regular-horizontal-padding/regular-horizontal-padding.component';
import { RegularTextComponent } from '../regular-text/regular-text.component';
import { IBorderTextButton } from '../../models/border-text-button/border-text-button';
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
  @Input() href!: string;
  @Input() target!: string;
  @Input() model!: IBorderTextButton;
  private _linkClassController = {
    '--blue': false,
    '--yellow': false,
  };

  ngOnInit(): void {
    this._linkClassController[`--${this.model.style.color}`] = true;
    console.log(this._linkClassController);
  }

  get linkClassController() {
    return this._linkClassController;
  }
}

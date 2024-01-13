import { Component, HostListener, Input } from '@angular/core';
import { SmallVerticalPaddingComponent } from '../../components.shared/small-vertical-padding/small-vertical-padding.component';
import { RegularNucleoLogoComponent } from '../../components.shared/regular-nucleo-logo/regular-nucleo-logo.component';
import { RegularNucleoIconComponent } from '../../components.shared/regular-nucleo-icon/regular-nucleo-icon.component';
import { BigTextButtonComponent } from '../../components.shared/big-text-button/big-text-button.component';
import { RegularListComponent } from '../../components.shared/regular-list/regular-list.component';
import { IRegularFlexBox } from '../../models/regular-flex-box/regular-flex-box';
import { AnimatedTextLinkComponent } from '../../components.shared/animated-text-link/animated-text-link.component';
import { CommonModule } from '@angular/common';
import { IRegularHeader } from '../../models/regular-header/regular-header';
import { RegularTextLinkComponent } from '../../components.shared/regular-text-link/regular-text-link.component';
import { RegularTextButtonComponent } from '../../components.shared/regular-text-button/regular-text-button.component';
import { MediumTextLinkComponent } from '../../components.shared/medium-text-link/medium-text-link.component';
import { MediumTextButtonComponent } from '../../components.shared/medium-text-button/medium-text-button.component';
import { RegularHorizontalPaddingComponent } from '../../components.shared/regular-horizontal-padding/regular-horizontal-padding.component';

@Component({
  selector: 'app-regular-header',
  standalone: true,
  templateUrl: './regular-header.component.html',
  styleUrl: './regular-header.component.scss',
  imports: [
    CommonModule,
    SmallVerticalPaddingComponent,
    RegularNucleoLogoComponent,
    RegularNucleoIconComponent,
    BigTextButtonComponent,
    RegularListComponent,
    AnimatedTextLinkComponent,
    RegularTextLinkComponent,
    RegularTextButtonComponent,
    MediumTextLinkComponent,
    MediumTextButtonComponent,
    RegularHorizontalPaddingComponent,
  ],
})
export class RegularHeaderComponent {
  @Input() model!: IRegularHeader;
  private _slideMenuClassController = {
    '--on': false,
  };

  get slideMenuClassController() {
    return this._slideMenuClassController;
  }

  onSlideMenuButtonClick() {
    this._slideMenuClassController['--on'] =
      !this._slideMenuClassController['--on'];
  }
}

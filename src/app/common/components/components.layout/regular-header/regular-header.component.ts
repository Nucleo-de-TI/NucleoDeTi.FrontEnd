import { Component, HostListener, Input } from '@angular/core';
import { SmallVerticalPaddingComponent } from '../../components.shared/small-vertical-padding/small-vertical-padding.component';
import { RegularNucleoLogoComponent } from '../../components.shared/regular-nucleo-logo/regular-nucleo-logo.component';
import { RegularNucleoIconComponent } from '../../components.shared/regular-nucleo-icon/regular-nucleo-icon.component';
import { BigTextButtonComponent } from '../../components.shared/big-text-button/big-text-button.component';
import { RegularListComponent } from '../../components.shared/regular-list/regular-list.component';
import { AnimatedTextLinkComponent } from '../../components.shared/animated-text-link/animated-text-link.component';
import { CommonModule } from '@angular/common';
import { IRegularHeader } from '../../../models/regular-header/regular-header';
import { RegularTextLinkComponent } from '../../components.shared/regular-text-link/regular-text-link.component';
import { RegularTextButtonComponent } from '../../components.shared/regular-text-button/regular-text-button.component';
import { MediumTextLinkComponent } from '../../components.shared/medium-text-link/medium-text-link.component';
import { MediumTextButtonComponent } from '../../components.shared/medium-text-button/medium-text-button.component';
import { RegularHorizontalPaddingComponent } from '../../components.shared/regular-horizontal-padding/regular-horizontal-padding.component';
import { RegularSectionBoxComponent } from '../../components.shared/regular-section-box/regular-section-box.component';
import { Router } from '@angular/router';

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
    RegularSectionBoxComponent,
  ],
})
export class RegularHeaderComponent {
  private lastScrollTop = 0;
  private _fatherClassController = {
    '--off': false,
  };
  private _slideMenuClassController = {
    '--on': false,
  };

  @Input() model!: IRegularHeader;

  constructor(private router: Router) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(_: Event) {
    if (!this.router.url.includes('#')) {
      return;
    }

    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    if (!this._slideMenuClassController['--on']) {
      if (currentScrollTop > this.lastScrollTop) {
        this._fatherClassController['--off'] = true;
      } else {
        this._fatherClassController['--off'] = false;
      }
    }

    this.lastScrollTop = currentScrollTop;
  }

  get slideMenuClassController() {
    return this._slideMenuClassController;
  }

  get fatherClassController() {
    return this._fatherClassController;
  }

  onSlideMenuButtonClick() {
    this._slideMenuClassController['--on'] =
      !this._slideMenuClassController['--on'];
  }
}

import { Component, Input } from '@angular/core';
import { RegularSectionComponent } from '../../components.shared/regular-section/regular-section.component';
import { SmallVerticalPaddingComponent } from '../../components.shared/small-vertical-padding/small-vertical-padding.component';
import { RegularBrandLogoComponent } from '../../components.shared/regular-brand-logo/regular-brand-logo.component';
import { RegularBrandIconComponent } from '../../components.shared/regular-brand-icon/regular-brand-icon.component';
import { BigTextButtonComponent } from '../../components.shared/big-text-button/big-text-button.component';
import { RegularListComponent } from '../../components.shared/regular-list/regular-list.component';
import { IRegularList } from '../../models.shared/regular-list/regular-list';
import { AnimatedTextLinkComponent } from '../../components.shared/animated-text-link/animated-text-link.component';
import { CommonModule } from '@angular/common';
import { IRegularHeader } from '../../models.layout/regular-header/regular-header';
import { RegularTextLinkComponent } from '../../components.shared/regular-text-link/regular-text-link.component';
import { RegularTextButtonComponent } from '../../components.shared/regular-text-button/regular-text-button.component';
import { MediumTextLinkComponent } from "../../components.shared/medium-text-link/medium-text-link.component";
import { MediumTextButtonComponent } from "../../components.shared/medium-text-button/medium-text-button.component";

@Component({
    selector: 'app-regular-header',
    standalone: true,
    templateUrl: './regular-header.component.html',
    styleUrl: './regular-header.component.scss',
    imports: [
        CommonModule,
        RegularSectionComponent,
        SmallVerticalPaddingComponent,
        RegularBrandLogoComponent,
        RegularBrandIconComponent,
        BigTextButtonComponent,
        RegularListComponent,
        AnimatedTextLinkComponent,
        RegularTextLinkComponent,
        RegularTextButtonComponent,
        MediumTextLinkComponent,
        MediumTextButtonComponent
    ]
})
export class RegularHeaderComponent {
  @Input() model!: IRegularHeader;

  readonly socialHubList: IRegularList = {
    style: {
      'flex-direction': 'row',
      gap: '28px',
    },
  };

  readonly actionListModel: IRegularList = {
    style: {
      'flex-direction': 'row',
      gap: '42px',
    },
  };

  readonly slideMenuListModel: IRegularList = {
    style: {
      'flex-direction': 'column',
      'justify-content': 'center',
      'align-items': 'start',
    },
  };

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

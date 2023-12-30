import { Component, Input } from '@angular/core';
import { RegularVerticalPaddingComponent } from '../../components.shared/regular-vertical-padding/regular-vertical-padding.component';
import { RegularBrandIconComponent } from '../../components.shared/regular-brand-icon/regular-brand-icon.component';
import { BigTextComponent } from '../../components.shared/big-text/big-text.component';
import { RegularTextComponent } from '../../components.shared/regular-text/regular-text.component';
import { RegularBrandLogoComponent } from '../../components.shared/regular-brand-logo/regular-brand-logo.component';
import { RegularUnisoIconComponent } from '../../components.shared/regular-uniso-icon/regular-uniso-icon.component';
import { IRegularFooter } from '../../models.layout/regular-footer/regular-footer';
import { RegularListComponent } from '../../components.shared/regular-list/regular-list.component';
import { MediumTextLinkComponent } from '../../components.shared/medium-text-link/medium-text-link.component';
import { IRegularFlexBox } from '../../models.shared/regular-flex-box/regular-flex-box';
import { CommonModule } from '@angular/common';
import { RegularHorizontalPaddingComponent } from "../../components.shared/regular-horizontal-padding/regular-horizontal-padding.component";

@Component({
    selector: 'app-regular-footer',
    standalone: true,
    templateUrl: './regular-footer.component.html',
    styleUrl: './regular-footer.component.scss',
    imports: [
        CommonModule,
        RegularVerticalPaddingComponent,
        RegularBrandIconComponent,
        BigTextComponent,
        RegularTextComponent,
        RegularBrandLogoComponent,
        RegularUnisoIconComponent,
        RegularListComponent,
        MediumTextLinkComponent,
        RegularHorizontalPaddingComponent
    ]
})
export class RegularFooterComponent {
  @Input() model!: IRegularFooter;
}

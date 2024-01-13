import { Component, Input } from '@angular/core';
import { RegularVerticalPaddingComponent } from '../../components.shared/regular-vertical-padding/regular-vertical-padding.component';
import { RegularNucleoIconComponent } from '../../components.shared/regular-nucleo-icon/regular-nucleo-icon.component';
import { BigTextComponent } from '../../components.shared/big-text/big-text.component';
import { RegularTextComponent } from '../../components.shared/regular-text/regular-text.component';
import { RegularNucleoLogoComponent } from '../../components.shared/regular-nucleo-logo/regular-nucleo-logo.component';
import { RegularUnisoIconComponent } from '../../components.shared/regular-uniso-icon/regular-uniso-icon.component';
import { IRegularFooter } from '../../models/regular-footer/regular-footer';
import { RegularListComponent } from '../../components.shared/regular-list/regular-list.component';
import { MediumTextLinkComponent } from '../../components.shared/medium-text-link/medium-text-link.component';
import { IRegularFlexBox } from '../../models/regular-flex-box/regular-flex-box';
import { CommonModule } from '@angular/common';
import { RegularHorizontalPaddingComponent } from "../../components.shared/regular-horizontal-padding/regular-horizontal-padding.component";
import { RegularSectionBoxComponent } from "../../components.shared/regular-section-box/regular-section-box.component";
import { SmallSectionBoxComponent } from "../../components.shared/small-section-box/small-section-box.component";
import { SmallVerticalPaddingComponent } from "../../components.shared/small-vertical-padding/small-vertical-padding.component";

@Component({
    selector: 'app-regular-footer',
    standalone: true,
    templateUrl: './regular-footer.component.html',
    styleUrl: './regular-footer.component.scss',
    imports: [
        CommonModule,
        RegularVerticalPaddingComponent,
        RegularNucleoIconComponent,
        BigTextComponent,
        RegularTextComponent,
        RegularNucleoLogoComponent,
        RegularUnisoIconComponent,
        RegularListComponent,
        MediumTextLinkComponent,
        RegularHorizontalPaddingComponent,
        RegularSectionBoxComponent,
        SmallSectionBoxComponent,
        SmallVerticalPaddingComponent
    ]
})
export class RegularFooterComponent {
  @Input() model!: IRegularFooter;
}

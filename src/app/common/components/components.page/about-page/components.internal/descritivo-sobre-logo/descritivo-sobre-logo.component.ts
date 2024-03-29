import { Component } from '@angular/core';
import { RegularSectionBoxComponent } from "../../../../components.shared/regular-section-box/regular-section-box.component";
import { RegularFlexBoxComponent } from "../../../../components.shared/regular-flex-box/regular-flex-box.component";
import { RegularSectionBoxTitleComponent } from "../../../../components.shared/regular-section-box-title/regular-section-box-title.component";
import { RegularNucleoIconComponent } from "../../../../components.shared/regular-nucleo-icon/regular-nucleo-icon.component";
import { RegularNucleoLogoComponent } from "../../../../components.shared/regular-nucleo-logo/regular-nucleo-logo.component";

@Component({
    selector: 'app-descritivo-sobre-logo',
    standalone: true,
    templateUrl: './descritivo-sobre-logo.component.html',
    styleUrl: './descritivo-sobre-logo.component.scss',
    imports: [RegularSectionBoxComponent, RegularFlexBoxComponent, RegularSectionBoxTitleComponent, RegularNucleoIconComponent, RegularNucleoLogoComponent]
})
export class DescritivoSobreLogoComponent {

}

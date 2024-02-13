import { Component } from '@angular/core';
import { RegularSectionBoxComponent } from "../../../../components.shared/regular-section-box/regular-section-box.component";
import { RegularFlexBoxComponent } from "../../../../components.shared/regular-flex-box/regular-flex-box.component";
import { RegularSectionBoxTitleComponent } from "../../../../components.shared/regular-section-box-title/regular-section-box-title.component";
import { RegularNucleoIconComponent } from "../../../../components.shared/regular-nucleo-icon/regular-nucleo-icon.component";

@Component({
    selector: 'app-genti',
    standalone: true,
    templateUrl: './genti.component.html',
    styleUrl: './genti.component.scss',
    imports: [RegularSectionBoxComponent, RegularFlexBoxComponent, RegularSectionBoxTitleComponent, RegularNucleoIconComponent]
})
export class GentiComponent {

}

import { Component } from '@angular/core';
import { RegularSectionBoxComponent } from "../../../../components.shared/regular-section-box/regular-section-box.component";
import { RegularFlexBoxComponent } from "../../../../components.shared/regular-flex-box/regular-flex-box.component";
import { RegularSectionBoxTitleComponent } from "../../../../components.shared/regular-section-box-title/regular-section-box-title.component";
import { RegularBrandIconComponent } from "../../../../components.shared/regular-brand-icon/regular-brand-icon.component";

@Component({
    selector: 'app-sobre',
    standalone: true,
    templateUrl: './sobre.component.html',
    styleUrl: './sobre.component.scss',
    imports: [RegularSectionBoxComponent, RegularFlexBoxComponent, RegularSectionBoxTitleComponent, RegularBrandIconComponent]
})
export class SobreComponent {

}

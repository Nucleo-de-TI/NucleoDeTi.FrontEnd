import { Component } from '@angular/core';
import { RegularSectionBoxTitleComponent } from "../../../../components.shared/regular-section-box-title/regular-section-box-title.component";
import { BorderTextLinkComponent } from "../../../../components.shared/border-text-link/border-text-link.component";
import { RegularSectionBoxComponent } from "../../../../components.shared/regular-section-box/regular-section-box.component";

@Component({
    selector: 'app-vestibular',
    standalone: true,
    templateUrl: './vestibular.component.html',
    styleUrl: './vestibular.component.scss',
    imports: [RegularSectionBoxTitleComponent, BorderTextLinkComponent, RegularSectionBoxComponent]
})
export class VestibularComponent {

}

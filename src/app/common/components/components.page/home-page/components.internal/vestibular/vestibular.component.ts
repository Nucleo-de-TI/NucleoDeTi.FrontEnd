import { Component } from '@angular/core';
import { RegularSectionBoxTitleComponent } from "../../../../components.shared/regular-section-box-title/regular-section-box-title.component";
import { BorderTextLinkComponent } from "../../../../components.shared/border-text-link/border-text-link.component";
import { RegularSectionBoxComponent } from "../../../../components.shared/regular-section-box/regular-section-box.component";
import { SmallVerticalPaddingComponent } from "../../../../components.shared/small-vertical-padding/small-vertical-padding.component";

@Component({
    selector: 'app-vestibular',
    standalone: true,
    templateUrl: './vestibular.component.html',
    styleUrl: './vestibular.component.scss',
    imports: [RegularSectionBoxTitleComponent, BorderTextLinkComponent, RegularSectionBoxComponent, SmallVerticalPaddingComponent]
})
export class VestibularComponent {

}

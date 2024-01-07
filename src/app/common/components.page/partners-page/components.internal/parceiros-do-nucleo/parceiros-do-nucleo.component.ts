import { Component } from '@angular/core';
import { RegularSectionBoxComponent } from "../../../../components.shared/regular-section-box/regular-section-box.component";
import { RegularSectionBoxTitleComponent } from "../../../../components.shared/regular-section-box-title/regular-section-box-title.component";
import { RegularFlexBoxComponent } from "../../../../components.shared/regular-flex-box/regular-flex-box.component";
import { SmallVerticalPaddingComponent } from "../../../../components.shared/small-vertical-padding/small-vertical-padding.component";
import { BorderTextLinkComponent } from "../../../../components.shared/border-text-link/border-text-link.component";

@Component({
    selector: 'app-parceiros-do-nucleo',
    standalone: true,
    templateUrl: './parceiros-do-nucleo.component.html',
    styleUrl: './parceiros-do-nucleo.component.scss',
    imports: [RegularSectionBoxComponent, RegularSectionBoxTitleComponent, RegularFlexBoxComponent, SmallVerticalPaddingComponent, BorderTextLinkComponent]
})
export class ParceirosDoNucleoComponent {

}

import { Component } from '@angular/core';
import { RegularSectionBoxComponent } from "../../../../components.shared/regular-section-box/regular-section-box.component";
import { RegularSectionBoxTitleComponent } from "../../../../components.shared/regular-section-box-title/regular-section-box-title.component";
import { RegularFlexBoxComponent } from "../../../../components.shared/regular-flex-box/regular-flex-box.component";
import { SmallSectionBoxComponent } from "../../../../components.shared/small-section-box/small-section-box.component";
import { RegularTextLinkComponent } from "../../../../components.shared/regular-text-link/regular-text-link.component";
import { RegularVerticalPaddingComponent } from "../../../../components.shared/regular-vertical-padding/regular-vertical-padding.component";
import { BorderTextLinkComponent } from "../../../../components.shared/border-text-link/border-text-link.component";

@Component({
    selector: 'app-projetos-para-parceiros',
    standalone: true,
    templateUrl: './projetos-para-parceiros.component.html',
    styleUrl: './projetos-para-parceiros.component.scss',
    imports: [RegularSectionBoxComponent, RegularSectionBoxTitleComponent, RegularFlexBoxComponent, SmallSectionBoxComponent, RegularTextLinkComponent, RegularVerticalPaddingComponent, BorderTextLinkComponent]
})
export class ProjetosParaParceirosComponent {

}

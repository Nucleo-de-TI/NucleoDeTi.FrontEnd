import { Component } from '@angular/core';
import { RegularVerticalPaddingComponent } from "../../../../components.shared/regular-vertical-padding/regular-vertical-padding.component";
import { RegularSectionBoxTitleComponent } from "../../../../components.shared/regular-section-box-title/regular-section-box-title.component";
import { RegularSectionBoxComponent } from "../../../../components.shared/regular-section-box/regular-section-box.component";

@Component({
    selector: 'app-grupo-de-estudo',
    standalone: true,
    templateUrl: './grupo-de-estudo.component.html',
    styleUrl: './grupo-de-estudo.component.scss',
    imports: [RegularVerticalPaddingComponent, RegularSectionBoxTitleComponent, RegularSectionBoxComponent]
})
export class GrupoDeEstudoComponent {

}

import { Component } from '@angular/core';
import { RegularSectionBoxComponent } from "../../../../components.shared/regular-section-box/regular-section-box.component";
import { RegularFlexBoxComponent } from "../../../../components.shared/regular-flex-box/regular-flex-box.component";
import { RegularSectionBoxTitleComponent } from "../../../../components.shared/regular-section-box-title/regular-section-box-title.component";
import { RegularListComponent } from "../../../../components.shared/regular-list/regular-list.component";

@Component({
    selector: 'app-objetivos-e-composicao',
    standalone: true,
    templateUrl: './objetivos-e-composicao.component.html',
    styleUrl: './objetivos-e-composicao.component.scss',
    imports: [RegularSectionBoxComponent, RegularFlexBoxComponent, RegularSectionBoxTitleComponent, RegularListComponent]
})
export class ObjetivosEComposicaoComponent {

}

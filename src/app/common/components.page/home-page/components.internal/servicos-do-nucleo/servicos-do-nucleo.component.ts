import { Component } from '@angular/core';
import { RegularFlexBoxComponent } from "../../../../components.shared/regular-flex-box/regular-flex-box.component";
import { RegularSectionBoxTitleComponent } from "../../../../components.shared/regular-section-box-title/regular-section-box-title.component";
import { RegularSectionBoxComponent } from "../../../../components.shared/regular-section-box/regular-section-box.component";

@Component({
    selector: 'app-servicos-do-nucleo',
    standalone: true,
    templateUrl: './servicos-do-nucleo.component.html',
    styleUrl: './servicos-do-nucleo.component.scss',
    imports: [RegularFlexBoxComponent, RegularSectionBoxTitleComponent, RegularSectionBoxComponent]
})
export class ServicosDoNucleoComponent {

}

import { Component } from '@angular/core';
import { BigSectionBoxComponent } from "../../../../components.shared/big-section-box/big-section-box.component";
import { RegularFlexBoxComponent } from "../../../../components.shared/regular-flex-box/regular-flex-box.component";
import { RegularSectionBoxTitleComponent } from "../../../../components.shared/regular-section-box-title/regular-section-box-title.component";

@Component({
    selector: 'app-servicos-do-nucleo',
    standalone: true,
    templateUrl: './servicos-do-nucleo.component.html',
    styleUrl: './servicos-do-nucleo.component.scss',
    imports: [BigSectionBoxComponent, RegularFlexBoxComponent, RegularSectionBoxTitleComponent]
})
export class ServicosDoNucleoComponent {

}

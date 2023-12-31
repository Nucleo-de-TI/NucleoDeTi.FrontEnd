import { Component } from '@angular/core';
import { RegularVerticalPaddingComponent } from "../../../../components.shared/regular-vertical-padding/regular-vertical-padding.component";
import { RegularSectionBoxTitleComponent } from "../../../../components.shared/regular-section-box-title/regular-section-box-title.component";
import { RegularSectionBoxComponent } from "../../../../components.shared/regular-section-box/regular-section-box.component";

@Component({
    selector: 'app-historico',
    standalone: true,
    templateUrl: './historico.component.html',
    styleUrl: './historico.component.scss',
    imports: [RegularVerticalPaddingComponent, RegularSectionBoxTitleComponent, RegularSectionBoxComponent]
})
export class HistoricoComponent {

}

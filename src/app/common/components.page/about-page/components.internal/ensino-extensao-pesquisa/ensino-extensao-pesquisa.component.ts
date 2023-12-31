import { Component } from '@angular/core';
import { RegularSectionBoxComponent } from "../../../../components.shared/regular-section-box/regular-section-box.component";
import { SmallSectionBoxComponent } from "../../../../components.shared/small-section-box/small-section-box.component";
import { RegularSectionBoxTitleComponent } from "../../../../components.shared/regular-section-box-title/regular-section-box-title.component";
import { RegularFlexBoxComponent } from "../../../../components.shared/regular-flex-box/regular-flex-box.component";

@Component({
    selector: 'app-ensino-extensao-pesquisa',
    standalone: true,
    templateUrl: './ensino-extensao-pesquisa.component.html',
    styleUrl: './ensino-extensao-pesquisa.component.scss',
    imports: [RegularSectionBoxComponent, SmallSectionBoxComponent, RegularSectionBoxTitleComponent, RegularFlexBoxComponent]
})
export class EnsinoExtensaoPesquisaComponent {

}

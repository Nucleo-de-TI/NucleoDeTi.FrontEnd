import { Component } from '@angular/core';
import { RegularSectionBoxComponent } from "../../../../components.shared/regular-section-box/regular-section-box.component";
import { RegularBrandLogoComponent } from "../../../../components.shared/regular-brand-logo/regular-brand-logo.component";
import { RegularFlexBoxComponent } from "../../../../components.shared/regular-flex-box/regular-flex-box.component";
import { RegularSectionBoxTitleComponent } from "../../../../components.shared/regular-section-box-title/regular-section-box-title.component";

@Component({
    selector: 'app-formacao-da-comissao',
    standalone: true,
    templateUrl: './formacao-da-comissao.component.html',
    styleUrl: './formacao-da-comissao.component.scss',
    imports: [RegularSectionBoxComponent, RegularBrandLogoComponent, RegularFlexBoxComponent, RegularSectionBoxTitleComponent]
})
export class FormacaoDaComissaoComponent {

}

import { Component } from '@angular/core';
import { RegularSectionBoxComponent } from "../../../../components.shared/regular-section-box/regular-section-box.component";
import { RegularSectionBoxTitleComponent } from "../../../../components.shared/regular-section-box-title/regular-section-box-title.component";
import { RegularFlexBoxComponent } from "../../../../components.shared/regular-flex-box/regular-flex-box.component";
import { SmallSectionBoxComponent } from "../../../../components.shared/small-section-box/small-section-box.component";
import { BigTextComponent } from "../../../../components.shared/big-text/big-text.component";
import { LargeTextComponent } from "../../../../components.shared/large-text/large-text.component";

@Component({
    selector: 'app-estrutura',
    standalone: true,
    templateUrl: './estrutura.component.html',
    styleUrl: './estrutura.component.scss',
    imports: [RegularSectionBoxComponent, RegularSectionBoxTitleComponent, RegularFlexBoxComponent, SmallSectionBoxComponent, BigTextComponent, LargeTextComponent]
})
export class EstruturaComponent {

}

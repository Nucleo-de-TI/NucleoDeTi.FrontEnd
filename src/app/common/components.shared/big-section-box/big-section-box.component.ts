import { Component } from '@angular/core';
import { RegularHorizontalPaddingComponent } from "../regular-horizontal-padding/regular-horizontal-padding.component";
import { BigVerticalPaddingComponent } from "../big-vertical-padding/big-vertical-padding.component";
import { RegularVerticalPaddingComponent } from "../regular-vertical-padding/regular-vertical-padding.component";

@Component({
    selector: 'app-big-section-box',
    standalone: true,
    templateUrl: './big-section-box.component.html',
    styleUrl: './big-section-box.component.scss',
    imports: [RegularHorizontalPaddingComponent, BigVerticalPaddingComponent, RegularVerticalPaddingComponent]
})
export class BigSectionBoxComponent {

}

import { Component } from '@angular/core';
import { RegularHorizontalPaddingComponent } from "../regular-horizontal-padding/regular-horizontal-padding.component";
import { BigVerticalPaddingComponent } from "../big-vertical-padding/big-vertical-padding.component";

@Component({
    selector: 'app-regular-section-box',
    standalone: true,
    templateUrl: './regular-section-box.component.html',
    styleUrl: './regular-section-box.component.scss',
    imports: [RegularHorizontalPaddingComponent, BigVerticalPaddingComponent]
})
export class RegularSectionBoxComponent {

}

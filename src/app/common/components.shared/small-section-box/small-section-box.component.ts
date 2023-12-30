import { Component } from '@angular/core';
import { RegularHorizontalPaddingComponent } from "../regular-horizontal-padding/regular-horizontal-padding.component";
import { RegularVerticalPaddingComponent } from "../regular-vertical-padding/regular-vertical-padding.component";

@Component({
    selector: 'app-small-section-box',
    standalone: true,
    templateUrl: './small-section-box.component.html',
    styleUrl: './small-section-box.component.scss',
    imports: [RegularHorizontalPaddingComponent, RegularVerticalPaddingComponent]
})
export class SmallSectionBoxComponent {

}

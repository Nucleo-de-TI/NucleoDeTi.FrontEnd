import { Component } from '@angular/core';
import { RegularVerticalPaddingComponent } from "../regular-vertical-padding/regular-vertical-padding.component";

@Component({
    selector: 'app-big-vertical-padding',
    standalone: true,
    templateUrl: './big-vertical-padding.component.html',
    styleUrl: './big-vertical-padding.component.scss',
    imports: [RegularVerticalPaddingComponent]
})
export class BigVerticalPaddingComponent {

}

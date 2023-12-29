import { Component } from '@angular/core';
import { SmallVerticalPaddingComponent } from "../small-vertical-padding/small-vertical-padding.component";

@Component({
    selector: 'app-regular-vertical-padding',
    standalone: true,
    templateUrl: './regular-vertical-padding.component.html',
    styleUrl: './regular-vertical-padding.component.scss',
    imports: [SmallVerticalPaddingComponent]
})
export class RegularVerticalPaddingComponent {

}

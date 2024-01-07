import { Component } from '@angular/core';
import { SmallVerticalPaddingComponent } from "../small-vertical-padding/small-vertical-padding.component";

@Component({
    selector: 'app-regular-main',
    standalone: true,
    templateUrl: './regular-main.component.html',
    styleUrl: './regular-main.component.scss',
    imports: [SmallVerticalPaddingComponent]
})
export class RegularMainComponent {

}

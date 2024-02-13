import { Component } from '@angular/core';
import { RegularVerticalPaddingComponent } from "../../../../components.shared/regular-vertical-padding/regular-vertical-padding.component";
import { SmallVerticalPaddingComponent } from "../../../../components.shared/small-vertical-padding/small-vertical-padding.component";

@Component({
    selector: 'app-welcome-image',
    standalone: true,
    templateUrl: './welcome-image.component.html',
    styleUrl: './welcome-image.component.scss',
    imports: [RegularVerticalPaddingComponent, SmallVerticalPaddingComponent]
})
export class WelcomeImageComponent {

}

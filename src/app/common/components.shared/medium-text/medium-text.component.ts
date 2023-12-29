import { Component } from '@angular/core';
import { RegularTextComponent } from "../regular-text/regular-text.component";

@Component({
    selector: 'app-medium-text',
    standalone: true,
    templateUrl: './medium-text.component.html',
    styleUrl: './medium-text.component.scss',
    imports: [RegularTextComponent]
})
export class MediumTextComponent {

}

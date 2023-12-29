import { Component } from '@angular/core';
import { RegularTextComponent } from "../regular-text/regular-text.component";

@Component({
    selector: 'app-big-text',
    standalone: true,
    templateUrl: './big-text.component.html',
    styleUrl: './big-text.component.scss',
    imports: [RegularTextComponent]
})
export class BigTextComponent {

}

import { Component, Input } from '@angular/core';
import { RegularTextComponent } from "../regular-text/regular-text.component";
import { IRegularText } from '../../models/regular-text/regular-text';

@Component({
    selector: 'app-medium-text',
    standalone: true,
    templateUrl: './medium-text.component.html',
    styleUrl: './medium-text.component.scss',
    imports: [RegularTextComponent]
})
export class MediumTextComponent {
  @Input() model?: IRegularText;
}

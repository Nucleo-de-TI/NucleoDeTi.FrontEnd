import { Component, Input } from '@angular/core';
import { RegularTextComponent } from "../regular-text/regular-text.component";
import { IRegularText } from '../../models/regular-text/regular-text';

@Component({
    selector: 'app-big-text',
    standalone: true,
    templateUrl: './big-text.component.html',
    styleUrl: './big-text.component.scss',
    imports: [RegularTextComponent]
})
export class BigTextComponent {
  @Input() model?: IRegularText;
}

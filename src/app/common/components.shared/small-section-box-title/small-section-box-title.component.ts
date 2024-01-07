import { Component, Input } from '@angular/core';
import { RegularTextComponent } from '../regular-text/regular-text.component';
import { IRegularText } from '../../models/regular-text/regular-text';

@Component({
  selector: 'app-small-section-box-title',
  standalone: true,
  templateUrl: './small-section-box-title.component.html',
  styleUrl: './small-section-box-title.component.scss',
  imports: [RegularTextComponent],
})
export class SmallSectionBoxTitleComponent {
  @Input() model?: IRegularText;
}

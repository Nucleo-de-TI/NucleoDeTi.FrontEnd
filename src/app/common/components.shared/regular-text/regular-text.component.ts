import { Component, Input } from '@angular/core';
import { IRegularText } from '../../models/regular-text/regular-text';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-regular-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './regular-text.component.html',
  styleUrl: './regular-text.component.scss'
})
export class RegularTextComponent {
  @Input() model?: IRegularText;
}

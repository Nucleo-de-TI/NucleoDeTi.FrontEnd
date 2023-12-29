import { Component, Input } from '@angular/core';
import { RegularTextComponent } from '../regular-text/regular-text.component';

@Component({
  selector: 'app-regular-text-link',
  standalone: true,
  templateUrl: './regular-text-link.component.html',
  styleUrl: './regular-text-link.component.scss',
  imports: [RegularTextComponent],
})
export class RegularTextLinkComponent {
  @Input() href!: string;
  @Input() target!: string;
}

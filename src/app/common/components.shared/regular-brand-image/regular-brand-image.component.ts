import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-regular-brand-image',
  standalone: true,
  imports: [],
  templateUrl: './regular-brand-image.component.html',
  styleUrl: './regular-brand-image.component.scss',
})
export class RegularBrandImageComponent {
  @Input() href!: string;
  @Input() src!: string;
  @Input() target?: string;
}

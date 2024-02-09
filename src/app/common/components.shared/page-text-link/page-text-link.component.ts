import { Component, Input } from '@angular/core';
import { RegularTextLinkComponent } from '../regular-text-link/regular-text-link.component';
import { IRegularLink } from '../../models/regular-link/regular-link';

@Component({
  selector: 'app-page-text-link',
  standalone: true,
  templateUrl: './page-text-link.component.html',
  styleUrl: './page-text-link.component.scss',
  imports: [RegularTextLinkComponent],
})
export class PageTextLinkComponent {
  @Input() href?: string;
  @Input() target?: string;
  @Input() model?: IRegularLink;
}

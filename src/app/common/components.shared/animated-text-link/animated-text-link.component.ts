import { Component, Input } from '@angular/core';
import { RegularTextLinkComponent } from '../regular-text-link/regular-text-link.component';
import { IAnimatedLink } from '../../models/animated-link/animated-link';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animated-text-link',
  standalone: true,
  templateUrl: './animated-text-link.component.html',
  styleUrl: './animated-text-link.component.scss',
  imports: [CommonModule, RegularTextLinkComponent],
})
export class AnimatedTextLinkComponent {
  @Input() href!: string;
  @Input() target!: string;
  @Input() model?: IAnimatedLink;
}

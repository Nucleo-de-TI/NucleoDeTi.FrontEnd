import { Component, Input } from '@angular/core';
import { RegularTextLinkComponent } from '../regular-text-link/regular-text-link.component';
import { IAnimatedLink } from '../../models/animated-link/animated-link';
import { CommonModule } from '@angular/common';
import { RegularTextComponent } from "../regular-text/regular-text.component";

@Component({
    selector: 'app-animated-text-link',
    standalone: true,
    templateUrl: './animated-text-link.component.html',
    styleUrl: './animated-text-link.component.scss',
    imports: [CommonModule, RegularTextLinkComponent, RegularTextComponent]
})
export class AnimatedTextLinkComponent {
  @Input() href!: string;
  @Input() target!: string;
  @Input() model?: IAnimatedLink;
}

import { Component } from '@angular/core';
import { RegularAppearAnimationDirective } from '../../directives/regular-appear-animation/regular-appear-animation.directive';

@Component({
  selector: 'app-animated-section-box',
  standalone: true,
  imports: [RegularAppearAnimationDirective],
  templateUrl: './animated-section-box.component.html',
  styleUrl: './animated-section-box.component.scss'
})
export class AnimatedSectionBoxComponent {

}

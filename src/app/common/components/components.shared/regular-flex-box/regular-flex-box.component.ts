import { Component, Input } from '@angular/core';
import {
  IRegularFlexBox,
} from '../../../models/regular-flex-box/regular-flex-box';
import { CommonModule } from '@angular/common';
import { RegularFlexBoxDirective } from '../../../directives/regular-flex-box/regular-flex-box.directive';

@Component({
  selector: 'app-regular-flex-box',
  standalone: true,
  imports: [CommonModule, RegularFlexBoxDirective],
  templateUrl: './regular-flex-box.component.html',
  styleUrl: './regular-flex-box.component.scss',
})
export class RegularFlexBoxComponent {
  @Input() model!: IRegularFlexBox;
}

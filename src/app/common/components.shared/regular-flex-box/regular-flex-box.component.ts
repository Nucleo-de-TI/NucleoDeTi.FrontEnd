import { Component, Input } from '@angular/core';
import { IRegularFlexBox } from '../../models.shared/regular-flex-box/regular-flex-box';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-regular-flex-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './regular-flex-box.component.html',
  styleUrl: './regular-flex-box.component.scss',
})
export class RegularFlexBoxComponent {
  @Input() model!: IRegularFlexBox;
}

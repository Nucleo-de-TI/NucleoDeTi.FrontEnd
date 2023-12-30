import { Component, Input } from '@angular/core';
import { IRegularFlexBox } from '../../models.shared/regular-flex-box/regular-flex-box';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-regular-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './regular-list.component.html',
  styleUrl: './regular-list.component.scss'
})
export class RegularListComponent {
  @Input() model!: IRegularFlexBox;
}

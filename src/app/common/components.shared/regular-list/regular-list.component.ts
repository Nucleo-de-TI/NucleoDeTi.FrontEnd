import { Component, Input } from '@angular/core';
import { IRegularList } from '../../models.shared/regular-list/regular-list';
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
  @Input() model!: IRegularList;
}

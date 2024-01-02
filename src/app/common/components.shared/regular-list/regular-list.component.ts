import { Component, HostListener, Input, OnInit } from '@angular/core';
import { IRegularFlexBoxMedia } from '../../models.shared/regular-flex-box/regular-flex-box';
import { CommonModule } from '@angular/common';
import { IRegularList } from '../../models.shared/regular-list/regular-list';
import { RegularFlexBoxDirective } from '../../directives/regular-flex-box/regular-flex-box.directive';

@Component({
  selector: 'app-regular-list',
  standalone: true,
  imports: [CommonModule, RegularFlexBoxDirective],
  templateUrl: './regular-list.component.html',
  styleUrl: './regular-list.component.scss',
})
export class RegularListComponent implements OnInit {
  @Input() model!: IRegularList;
  listClassController = {
    '--padding-left': false,
  };

  ngOnInit(): void {
    if (
      !this.model.style['list-style'] ||
      this.model.style['list-style'] === 'disc'
    ) {
      this.listClassController['--padding-left'] = true;
    }
  }
}

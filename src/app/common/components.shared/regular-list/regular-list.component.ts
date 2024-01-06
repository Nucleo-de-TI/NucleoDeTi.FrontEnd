import { Component, HostListener, Input, OnInit } from '@angular/core';
import { IRegularFlexBoxMedia } from '../../models/regular-flex-box/regular-flex-box';
import { CommonModule } from '@angular/common';
import { IRegularList } from '../../models/regular-list/regular-list';
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
  private _listClassController = {
    '--padding-left': false,
  };

  get listClassController() {
    return this._listClassController;
  }

  ngOnInit(): void {
    if (
      !this.model.style['list-style'] ||
      this.model.style['list-style'] === 'disc'
    ) {
      this._listClassController['--padding-left'] = true;
    }
  }
}

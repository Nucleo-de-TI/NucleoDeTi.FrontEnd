import { Component, HostListener, Input, OnInit } from '@angular/core';
import { IRegularFlexBoxMedia } from '../../models.shared/regular-flex-box/regular-flex-box';
import { CommonModule } from '@angular/common';
import { IRegularList } from '../../models.shared/regular-list/regular-list';

@Component({
  selector: 'app-regular-list',
  standalone: true,
  imports: [CommonModule],
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

    if (!this.model.media) {
      return;
    }

    this.model.media.unshift(
      JSON.parse(JSON.stringify({ 'min-width': 0, style: this.model.style }))
    );

    this.setStyle();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.setStyle();
  }

  private setStyle() {
    if (!this.model.media) {
      return;
    }

    const currentWidth = /Mobi|Android/i.test(navigator.userAgent)
      ? document.documentElement.clientWidth
      : window.innerWidth;
    let pickedQuery: IRegularFlexBoxMedia = JSON.parse(
      JSON.stringify(this.model.media[0])
    );

    this.model.media!.forEach((query) => {
      if (query['min-width'] <= currentWidth) {
        if (
          pickedQuery === undefined ||
          query['min-width'] > pickedQuery['min-width']
        ) {
          pickedQuery = query;
        }
      }
    });

    this.model.style = JSON.parse(JSON.stringify(pickedQuery.style));
  }
}

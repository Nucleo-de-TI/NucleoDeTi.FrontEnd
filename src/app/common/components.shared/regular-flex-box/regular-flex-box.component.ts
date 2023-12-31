import { Component, HostListener, Input, OnInit } from '@angular/core';
import {
  IRegularFlexBox, IRegularFlexBoxMedia,
} from '../../models.shared/regular-flex-box/regular-flex-box';
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

  ngOnInit(): void {
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

    const currentWidth = /Mobi|Android/i.test(navigator.userAgent) ? document.documentElement.clientWidth : window.innerWidth;
    let pickedQuery: IRegularFlexBoxMedia = JSON.parse(JSON.stringify(this.model.media[0]));

    this.model.media!.forEach((query) => {
      if (query['min-width'] <= currentWidth) {
        if (pickedQuery === undefined || query['min-width'] > pickedQuery['min-width']) {
          pickedQuery = query;
        }
      }
    });

    this.model.style = JSON.parse(JSON.stringify(pickedQuery.style))
  }
}
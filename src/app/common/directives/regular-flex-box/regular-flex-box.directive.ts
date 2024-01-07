import { Directive, HostListener, Input, OnInit } from '@angular/core';
import {
  IRegularFlexBox,
  IRegularFlexBoxMedia,
} from '../../models/regular-flex-box/regular-flex-box';

@Directive({
  selector: '[appRegularFlexBox]',
  standalone: true,
})
export class RegularFlexBoxDirective implements OnInit {
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
    try {
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
    } catch (err: any) {
      if (err.name !== 'ReferenceError') {
        throw err;
      }
    }
  }
}

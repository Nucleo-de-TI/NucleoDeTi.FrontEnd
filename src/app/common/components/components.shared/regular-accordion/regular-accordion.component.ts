import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { RegularTextButtonComponent } from '../regular-text-button/regular-text-button.component';
import { RegularTextComponent } from '../regular-text/regular-text.component';
import { MediumTextComponent } from '../medium-text/medium-text.component';
import { BigTextComponent } from '../big-text/big-text.component';
import { SmallVerticalPaddingComponent } from '../small-vertical-padding/small-vertical-padding.component';
import { CommonModule } from '@angular/common';
import { IRegularAccordion } from '../../../models/regular-accordion/regular-accordion';

@Component({
  selector: 'app-regular-accordion',
  standalone: true,
  templateUrl: './regular-accordion.component.html',
  styleUrl: './regular-accordion.component.scss',
  imports: [
    CommonModule,
    RegularTextButtonComponent,
    RegularTextComponent,
    MediumTextComponent,
    BigTextComponent,
    SmallVerticalPaddingComponent,
  ],
})
export class RegularAccordionComponent implements AfterViewInit {
  @Input() model!: IRegularAccordion;
  @ViewChild('accordionContent') accordionContentRef!: ElementRef;
  private _accordionContentInitialHeight!: string;
  private _accordionContentStyleController: { height?: string } = {};
  private _accordionButtonIconClassController = {
    '--on': false,
    '--off': true,
  };

  get accordionContentStyleController() {
    return this._accordionContentStyleController;
  }

  get accordionButtonIconClassController() {
    return this._accordionButtonIconClassController;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setAccordionContentHeight();
  }

  ngAfterViewInit() {
    this.setAccordionContentHeight();
  }

  private setAccordionContentHeight() {
    this._accordionButtonIconClassController['--on'] = false;
    this._accordionContentStyleController.height = '0px';

    try {
      this._accordionContentInitialHeight = getComputedStyle(
        this.accordionContentRef.nativeElement
      ).getPropertyValue('height');
    } catch (err: any) {
      if (err.name !== 'ReferenceError') {
        throw err;
      }
    }
  }

  onAccordionButtonClick() {
    this._accordionButtonIconClassController['--on'] =
      !this._accordionButtonIconClassController['--on'];

    this._accordionContentStyleController.height =
      this._accordionContentStyleController.height === '0px'
        ? this._accordionContentInitialHeight
        : '0px';
  }
}

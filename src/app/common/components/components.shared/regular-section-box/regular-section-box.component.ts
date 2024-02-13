import { Component } from '@angular/core';
import { RegularHorizontalPaddingComponent } from '../regular-horizontal-padding/regular-horizontal-padding.component';
import { RegularVerticalPaddingComponent } from '../regular-vertical-padding/regular-vertical-padding.component';
import { SmallVerticalPaddingComponent } from '../small-vertical-padding/small-vertical-padding.component';

@Component({
  selector: 'app-regular-section-box',
  standalone: true,
  templateUrl: './regular-section-box.component.html',
  styleUrl: './regular-section-box.component.scss',
  imports: [
    RegularHorizontalPaddingComponent,
    RegularVerticalPaddingComponent,
    SmallVerticalPaddingComponent,
  ],
})
export class RegularSectionBoxComponent {}

import { Component } from '@angular/core';
import { RegularSectionBoxComponent } from '../../../../components.shared/regular-section-box/regular-section-box.component';
import { RegularSectionBoxTitleComponent } from '../../../../components.shared/regular-section-box-title/regular-section-box-title.component';
import { SmallVerticalPaddingComponent } from '../../../../components.shared/small-vertical-padding/small-vertical-padding.component';
import { RegularFlexBoxComponent } from '../../../../components.shared/regular-flex-box/regular-flex-box.component';
import { BorderTextLinkComponent } from '../../../../components.shared/border-text-link/border-text-link.component';
import { RegularVerticalPaddingComponent } from '../../../../components.shared/regular-vertical-padding/regular-vertical-padding.component';

@Component({
  selector: 'app-nossos-parceiros',
  standalone: true,
  templateUrl: './nossos-parceiros.component.html',
  styleUrl: './nossos-parceiros.component.scss',
  imports: [
    RegularSectionBoxComponent,
    RegularSectionBoxTitleComponent,
    SmallVerticalPaddingComponent,
    RegularFlexBoxComponent,
    BorderTextLinkComponent,
    RegularVerticalPaddingComponent,
  ],
})
export class NossosParceirosComponent {
  readonly partners = [
    [
      [
        {
          img: './assets/images/general/ntmiuzdcxaru.png',
        },
        {
          img: './assets/images/general/ntmiuzdcxaru.png',
        },
      ],
      [
        {
          img: './assets/images/general/ntmiuzdcxaru.png',
        },
        {
          img: './assets/images/general/ntmiuzdcxaru.png',
        },
      ],
    ],
    [
      [
        {
          img: './assets/images/general/ntmiuzdcxaru.png',
        },
        {
          img: './assets/images/general/ntmiuzdcxaru.png',
        },
      ],
      [
        {
          img: './assets/images/general/ntmiuzdcxaru.png',
        },
        {
          img: './assets/images/general/ntmiuzdcxaru.png',
        },
      ],
    ],
  ];
}

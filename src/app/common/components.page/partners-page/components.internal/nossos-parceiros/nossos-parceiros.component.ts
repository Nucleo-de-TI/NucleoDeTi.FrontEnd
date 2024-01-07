import { Component } from '@angular/core';
import { RegularSectionBoxComponent } from '../../../../components.shared/regular-section-box/regular-section-box.component';
import { RegularSectionBoxTitleComponent } from '../../../../components.shared/regular-section-box-title/regular-section-box-title.component';
import { SmallVerticalPaddingComponent } from '../../../../components.shared/small-vertical-padding/small-vertical-padding.component';
import { RegularFlexBoxComponent } from '../../../../components.shared/regular-flex-box/regular-flex-box.component';
import { BorderTextLinkComponent } from '../../../../components.shared/border-text-link/border-text-link.component';
import { RegularVerticalPaddingComponent } from '../../../../components.shared/regular-vertical-padding/regular-vertical-padding.component';
import { RegularBrandImageComponent } from '../../../../components.shared/regular-brand-image/regular-brand-image.component';
import { CommonModule } from '@angular/common';
import { SmallSectionBoxComponent } from "../../../../components.shared/small-section-box/small-section-box.component";

@Component({
    selector: 'app-nossos-parceiros',
    standalone: true,
    templateUrl: './nossos-parceiros.component.html',
    styleUrl: './nossos-parceiros.component.scss',
    imports: [
        CommonModule,
        RegularSectionBoxComponent,
        RegularSectionBoxTitleComponent,
        SmallVerticalPaddingComponent,
        RegularFlexBoxComponent,
        BorderTextLinkComponent,
        RegularVerticalPaddingComponent,
        RegularBrandImageComponent,
        SmallSectionBoxComponent
    ]
})
export class NossosParceirosComponent {
  readonly partners = [
    [
      [
        {
          href: '#',
          img: './assets/images/general/ntmiuzdcxaru.png',
        },
        {
          href: '#',
          img: './assets/images/general/ntmiuzdcxaru.png',
        },
      ],
      [
        {
          href: '#',
          img: './assets/images/general/ntmiuzdcxaru.png',
        },
        {
          href: '#',
          img: './assets/images/general/ntmiuzdcxaru.png',
        },
      ],
    ],
    [
      [
        {
          href: '#',
          img: './assets/images/general/ntmiuzdcxaru.png',
        },
        {
          href: '#',
          img: './assets/images/general/ntmiuzdcxaru.png',
        },
      ],
      [
        {
          href: '#',
          img: './assets/images/general/ntmiuzdcxaru.png',
        },
        {
          href: '#',
          img: './assets/images/general/ntmiuzdcxaru.png',
        },
      ],
    ],
  ];
}

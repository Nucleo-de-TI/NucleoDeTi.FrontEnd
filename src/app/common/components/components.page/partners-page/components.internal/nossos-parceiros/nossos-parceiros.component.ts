import { Component } from '@angular/core';
import { RegularSectionBoxComponent } from '../../../../components.shared/regular-section-box/regular-section-box.component';
import { RegularSectionBoxTitleComponent } from '../../../../components.shared/regular-section-box-title/regular-section-box-title.component';
import { SmallVerticalPaddingComponent } from '../../../../components.shared/small-vertical-padding/small-vertical-padding.component';
import { RegularFlexBoxComponent } from '../../../../components.shared/regular-flex-box/regular-flex-box.component';
import { BorderTextLinkComponent } from '../../../../components.shared/border-text-link/border-text-link.component';
import { RegularVerticalPaddingComponent } from '../../../../components.shared/regular-vertical-padding/regular-vertical-padding.component';
import { RegularBrandImageComponent } from '../../../../components.shared/regular-brand-image/regular-brand-image.component';
import { CommonModule } from '@angular/common';
import { SmallSectionBoxComponent } from '../../../../components.shared/small-section-box/small-section-box.component';

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
    SmallSectionBoxComponent,
  ],
})
export class NossosParceirosComponent {
  readonly partners = [
    [
      [
        {
          href: 'https://www.unosolucoes.com.br/',
          img: './assets/images/general/ntmiuzdcxaru.png',
        },
        {
          href: 'https://mindconsulting.com.br/',
          img: './assets/images/general/urvrjrdoxy.png',
        },
        {
          href: 'https://newrizon.global/',
          img: './assets/images/general/skodsoos.png',
        },
      ],
    ],
    [
      [
        {
          href: 'https://www.fit-tecnologia.org.br/home',
          img: './assets/images/general/omyokkuyyb.png',
        },
        {
          href: 'https://e-gerbo.com.br/',
          img: './assets/images/general/msjrkojxsj.png',
        },
        {
          href: 'https://app.escoladesolucoes.com.br/',
          img: './assets/images/general/jvvoomdkjy.png',
        },
      ],
    ],
    [
      [
        {
          href: 'https://www.gft.com/br/pt',
          img: './assets/images/general/kvvojmjmod.png',
        },
        {
          href: 'https://cloud.google.com/?utm_source=google&utm_medium=cpc&utm_campaign=latam-BR-all-pt-dr-BKWS-all-all-trial-e-dr-1707800-LUAC0010101&utm_content=text-ad-none-any-DEV_c-CRE_512285710731-ADGP_Hybrid+%7C+BKWS+-+EXA+%7C+Txt+~+GCP_General-KWID_43700062788251521-kwd-301173107424&utm_term=KW_google%20cloud-ST_Google+Cloud&gad_source=1&gclid=CjwKCAiA44OtBhAOEiwAj4gpObQkALkp2O8xteNMmXA80bjm10sRydd6dv8lk4CdfZWr8zhWLbeoAxoC08YQAvD_BwE&gclsrc=aw.ds',
          img: './assets/images/general/roxuojuokd.png',
        },
        {
          href: 'https://www.uppertools.com.br/',
          img: './assets/images/general/brsxbddmxu.png',
        },
      ],
    ],
  ];
}

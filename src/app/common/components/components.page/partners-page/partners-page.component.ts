import { Component } from '@angular/core';
import { RegularHeaderComponent } from '../../components.layout/regular-header/regular-header.component';
import { RegularFooterComponent } from '../../components.layout/regular-footer/regular-footer.component';
import { RegularMainComponent } from '../../components.shared/regular-main/regular-main.component';
import { ParceirosDoNucleoComponent } from './components.internal/parceiros-do-nucleo/parceiros-do-nucleo.component';
import { NossosParceirosComponent } from './components.internal/nossos-parceiros/nossos-parceiros.component';
import { ContatoComponent } from './components.internal/contato/contato.component';
import { HomePageFooterMock } from '../../../mocks/home-page-footer/home-page-footer.mock';
import { HomePageHeaderMock } from '../../../mocks/home-page-header/home-page-header.mock';

@Component({
  selector: 'app-partners-page',
  standalone: true,
  templateUrl: './partners-page.component.html',
  styleUrl: './partners-page.component.scss',
  imports: [
    RegularHeaderComponent,
    RegularFooterComponent,
    RegularMainComponent,
    ParceirosDoNucleoComponent,
    NossosParceirosComponent,
    ContatoComponent,
  ],
})
export class PartnersPageComponent {
  constructor(
    readonly homePageHeaderMock: HomePageHeaderMock,
    readonly homePageFooterMock: HomePageFooterMock
  ) {
    this.homePageHeaderMock.model.action.links[4].selected = true;
  }
}

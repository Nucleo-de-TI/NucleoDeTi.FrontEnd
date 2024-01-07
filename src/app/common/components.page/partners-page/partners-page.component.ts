import { Component } from '@angular/core';
import { RegularHeaderComponent } from '../../components.layout/regular-header/regular-header.component';
import { RegularFooterComponent } from '../../components.layout/regular-footer/regular-footer.component';
import { RegularMainComponent } from '../../components.shared/regular-main/regular-main.component';
import { HomePageHeaderService } from '../../services/homePageHeader/home-page-header.service';
import { HomePageFooterService } from '../../services/homePageFooter/home-page-footer.service';
import { ParceirosDoNucleoComponent } from "./components.internal/parceiros-do-nucleo/parceiros-do-nucleo.component";
import { NossosParceirosComponent } from "./components.internal/nossos-parceiros/nossos-parceiros.component";

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
        NossosParceirosComponent
    ]
})
export class PartnersPageComponent {
  readonly homePageHeaderService = new HomePageHeaderService();
  readonly homePageFooterService = new HomePageFooterService();

  constructor() {
    this.homePageHeaderService.model.action.links[4].selected = true;
  }
}

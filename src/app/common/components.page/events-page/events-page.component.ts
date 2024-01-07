import { Component } from '@angular/core';
import { HomePageHeaderService } from '../../services/homePageHeader/home-page-header.service';
import { HomePageFooterService } from '../../services/homePageFooter/home-page-footer.service';
import { RegularHeaderComponent } from '../../components.layout/regular-header/regular-header.component';
import { RegularFooterComponent } from '../../components.layout/regular-footer/regular-footer.component';
import { AgendaComponent } from './components.internal/agenda/agenda.component';
import { RelembreComponent } from "./components.internal/relembre/relembre.component";

@Component({
    selector: 'app-events-page',
    standalone: true,
    templateUrl: './events-page.component.html',
    styleUrl: './events-page.component.scss',
    imports: [RegularHeaderComponent, RegularFooterComponent, AgendaComponent, RelembreComponent]
})
export class EventsPageComponent {
  readonly homePageHeaderService = new HomePageHeaderService();
  readonly homePageFooterService = new HomePageFooterService();

  constructor() {
    this.homePageHeaderService.model.action.links[3].selected = true;
  }
}

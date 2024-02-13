import { Component } from '@angular/core';
import { RegularHeaderComponent } from '../../components.layout/regular-header/regular-header.component';
import { RegularFooterComponent } from '../../components.layout/regular-footer/regular-footer.component';
import { AgendaComponent } from './components.internal/agenda/agenda.component';
import { RelembreComponent } from './components.internal/relembre/relembre.component';
import { HomePageHeaderMock } from '../../../mocks/home-page-header/home-page-header.mock';
import { HomePageFooterMock } from '../../../mocks/home-page-footer/home-page-footer.mock';

@Component({
  selector: 'app-events-page',
  standalone: true,
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.scss',
  imports: [
    RegularHeaderComponent,
    RegularFooterComponent,
    AgendaComponent,
    RelembreComponent,
  ],
})
export class EventsPageComponent {
  constructor(
    readonly homePageHeaderMock: HomePageHeaderMock,
    readonly homePageFooterMock: HomePageFooterMock
  ) {
    this.homePageHeaderMock.model.action.links[3].selected = true;
  }
}

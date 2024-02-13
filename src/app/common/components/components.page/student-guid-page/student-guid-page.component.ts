import { Component } from '@angular/core';
import { RegularHeaderComponent } from '../../components.layout/regular-header/regular-header.component';
import { RegularFooterComponent } from '../../components.layout/regular-footer/regular-footer.component';
import { RegularMainComponent } from '../../components.shared/regular-main/regular-main.component';
import { GuiaDoAlunoComponent } from './components.internal/guia-do-aluno/guia-do-aluno.component';
import { HomePageHeaderMock } from '../../../mocks/home-page-header/home-page-header.mock';
import { HomePageFooterMock } from '../../../mocks/home-page-footer/home-page-footer.mock';

@Component({
  selector: 'app-student-guid-page',
  standalone: true,
  templateUrl: './student-guid-page.component.html',
  styleUrl: './student-guid-page.component.scss',
  imports: [
    RegularHeaderComponent,
    RegularFooterComponent,
    RegularMainComponent,
    GuiaDoAlunoComponent,
  ],
})
export class StudentGuidPageComponent {
  constructor(
    readonly homePageHeaderMock: HomePageHeaderMock,
    readonly homePageFooterMock: HomePageFooterMock
  ) {
    this.homePageHeaderMock.model.action.links[2].selected = true;
  }
}

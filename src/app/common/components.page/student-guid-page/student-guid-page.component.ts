import { Component } from '@angular/core';
import { HomePageHeaderService } from '../../services/homePageHeader/home-page-header.service';
import { HomePageFooterService } from '../../services/homePageFooter/home-page-footer.service';
import { RegularHeaderComponent } from "../../components.layout/regular-header/regular-header.component";
import { RegularFooterComponent } from "../../components.layout/regular-footer/regular-footer.component";
import { RegularMainComponent } from "../../components.shared/regular-main/regular-main.component";
import { GuiaDoAlunoComponent } from "./components.internal/guia-do-aluno/guia-do-aluno.component";

@Component({
    selector: 'app-student-guid-page',
    standalone: true,
    templateUrl: './student-guid-page.component.html',
    styleUrl: './student-guid-page.component.scss',
    imports: [RegularHeaderComponent, RegularFooterComponent, RegularMainComponent, GuiaDoAlunoComponent]
})
export class StudentGuidPageComponent {
  readonly homePageHeaderService = new HomePageHeaderService();
  readonly homePageFooterService = new HomePageFooterService();

  constructor() {
    this.homePageHeaderService.model.action.links[2].selected = true;
  }
}

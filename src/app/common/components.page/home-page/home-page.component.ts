import { Component } from '@angular/core';
import { RegularHeaderComponent } from '../../components.layout/regular-header/regular-header.component';
import { IRegularHeader } from '../../models.layout/regular-header/regular-header';
import { UiThemeService } from '../../services.shared/uiTheme/ui-theme.service';
import { RegularFooterComponent } from '../../components.layout/regular-footer/regular-footer.component';
import { IIconLink } from '../../models.shadow/icon-link/icon-link';
import { IRegularFooter } from '../../models.layout/regular-footer/regular-footer';
import { RegularSectionBoxComponent } from '../../components.shared/regular-section-box/regular-section-box.component';
import { RegularSectionBoxTitleComponent } from '../../components.shared/regular-section-box-title/regular-section-box-title.component';
import { RegularFlexBoxComponent } from '../../components.shared/regular-flex-box/regular-flex-box.component';
import { RegularTextLinkComponent } from '../../components.shared/regular-text-link/regular-text-link.component';
import { RegularVerticalPaddingComponent } from '../../components.shared/regular-vertical-padding/regular-vertical-padding.component';
import { RegularHorizontalPaddingComponent } from '../../components.shared/regular-horizontal-padding/regular-horizontal-padding.component';
import { BigSectionBoxComponent } from '../../components.shared/big-section-box/big-section-box.component';
import { SmallSectionBoxComponent } from '../../components.shared/small-section-box/small-section-box.component';
import { BorderTextLinkComponent } from '../../components.shared/border-text-link/border-text-link.component';
import { ServicosDoNucleoComponent } from './components.internal/servicos-do-nucleo/servicos-do-nucleo.component';
import { ProjetosParaParceirosComponent } from './components.internal/projetos-para-parceiros/projetos-para-parceiros.component';
import { JornadaAcademicaComponent } from './components.internal/jornada-academica/jornada-academica.component';
import { HomePageHeaderService } from '../../services.shared/homePageHeader/home-page-header.service';
import { HomePageFooterService } from '../../services.shared/homePageFooter/home-page-footer.service';
import { VestibularComponent } from "./components.internal/vestibular/vestibular.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [
        RegularHeaderComponent,
        RegularFooterComponent,
        RegularSectionBoxComponent,
        RegularSectionBoxTitleComponent,
        RegularFlexBoxComponent,
        RegularTextLinkComponent,
        RegularVerticalPaddingComponent,
        RegularHorizontalPaddingComponent,
        BigSectionBoxComponent,
        SmallSectionBoxComponent,
        BorderTextLinkComponent,
        ServicosDoNucleoComponent,
        ProjetosParaParceirosComponent,
        JornadaAcademicaComponent,
        VestibularComponent
    ]
})
export class HomePageComponent {
  public readonly homePageHeaderService = new HomePageHeaderService();
  public readonly homePageFooterService = new HomePageFooterService();
}

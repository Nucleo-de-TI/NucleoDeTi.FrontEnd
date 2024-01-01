import { Component } from '@angular/core';
import { HomePageHeaderService } from '../../services/homePageHeader/home-page-header.service';
import { HomePageFooterService } from '../../services/homePageFooter/home-page-footer.service';
import { RegularHeaderComponent } from '../../components.layout/regular-header/regular-header.component';
import { RegularFooterComponent } from '../../components.layout/regular-footer/regular-footer.component';
import { GrupoDeEstudoComponent } from './components.internal/grupo-de-estudo/grupo-de-estudo.component';
import { HistoricoComponent } from './components.internal/historico/historico.component';
import { ObjetivosEComposicaoComponent } from './components.internal/objetivos-e-composicao/objetivos-e-composicao.component';
import { DescritivoSobreLogoComponent } from './components.internal/descritivo-sobre-logo/descritivo-sobre-logo.component';
import { GentiComponent } from "./components.internal/genti/genti.component";
import { EnsinoExtensaoPesquisaComponent } from "./components.internal/ensino-extensao-pesquisa/ensino-extensao-pesquisa.component";

@Component({
    selector: 'app-about-page',
    standalone: true,
    templateUrl: './about-page.component.html',
    styleUrl: './about-page.component.scss',
    imports: [
        RegularHeaderComponent,
        RegularFooterComponent,
        GrupoDeEstudoComponent,
        HistoricoComponent,
        ObjetivosEComposicaoComponent,
        DescritivoSobreLogoComponent,
        GentiComponent,
        EnsinoExtensaoPesquisaComponent
    ]
})
export class AboutPageComponent {
  public readonly homePageHeaderService = new HomePageHeaderService();
  public readonly homePageFooterService = new HomePageFooterService();
}

import { Component } from '@angular/core';
import { RegularHeaderComponent } from '../../components.layout/regular-header/regular-header.component';
import { RegularFooterComponent } from '../../components.layout/regular-footer/regular-footer.component';
import { GrupoDeEstudoComponent } from './components.internal/grupo-de-estudo/grupo-de-estudo.component';
import { HistoricoComponent } from './components.internal/historico/historico.component';
import { ObjetivosEComposicaoComponent } from './components.internal/objetivos-e-composicao/objetivos-e-composicao.component';
import { DescritivoSobreLogoComponent } from './components.internal/descritivo-sobre-logo/descritivo-sobre-logo.component';
import { GentiComponent } from './components.internal/genti/genti.component';
import { EnsinoExtensaoPesquisaComponent } from './components.internal/ensino-extensao-pesquisa/ensino-extensao-pesquisa.component';
import { FormacaoDaComissaoComponent } from './components.internal/formacao-da-comissao/formacao-da-comissao.component';
import { EstruturaComponent } from './components.internal/estrutura/estrutura.component';
import { EquipesDaComposicaoComponent } from './components.internal/equipes-da-composicao/equipes-da-composicao.component';
import { RegularMainComponent } from '../../components.shared/regular-main/regular-main.component';
import { HomePageHeaderMock } from '../../../mocks/home-page-header/home-page-header.mock';
import { HomePageFooterMock } from '../../../mocks/home-page-footer/home-page-footer.mock';

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
    EnsinoExtensaoPesquisaComponent,
    FormacaoDaComissaoComponent,
    EstruturaComponent,
    EquipesDaComposicaoComponent,
    RegularMainComponent,
  ],
})
export class AboutPageComponent {
  constructor(
    readonly homePageHeaderMock: HomePageHeaderMock,
    readonly homePageFooterMock: HomePageFooterMock
  ) {
    this.homePageHeaderMock.model.action.links[0].selected = true;
  }
}

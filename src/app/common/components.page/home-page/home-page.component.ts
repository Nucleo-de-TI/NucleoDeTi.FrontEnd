import { Component } from '@angular/core';
import { RegularHeaderComponent } from '../../components.layout/regular-header/regular-header.component';
import { IRegularHeader } from '../../models.layout/regular-header/regular-header';
import { UiThemeService } from '../../services.shared/uiTheme/ui-theme.service';
import { RegularFooterComponent } from '../../components.layout/regular-footer/regular-footer.component';
import { IIconLink } from '../../models.shadow/icon-link/icon-link';
import { IRegularFooter } from '../../models.layout/regular-footer/regular-footer';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [RegularHeaderComponent, RegularFooterComponent],
})
export class HomePageComponent {
  private readonly uiThemeService = new UiThemeService();
  readonly socialMedias: IIconLink[] = [
    {
      href: '#',
      icon: 'bi bi-facebook',
    },
    {
      href: '#',
      icon: 'bi bi-instagram',
    },
    {
      href: '#',
      icon: 'bi bi-linkedin',
    },
    {
      href: '#',
      icon: 'bi bi-envelope-at',
    },
  ];
  readonly regularHeaderModel: IRegularHeader = {
    socialHub: {
      title: 'CENTRAL DE ATENDIMENTO',
      link: '#',
      links: this.socialMedias,
      buttons: [
        {
          icon: 'bi bi-megaphone',
          callback: () => {},
        },
        {
          icon: 'bi bi-brightness-high',
          callback: () => {
            this.uiThemeService.changeUiTheme();
          },
        },
        {
          icon: 'bi bi-ear',
          callback: () => {},
        },
      ],
    },
    action: {
      links: [
        {
          href: '#',
          icon: 'bi bi-building',
          innerText: 'Sobre',
        },
        {
          href: '#',
          icon: 'bi bi-book',
          innerText: 'Cursos',
        },
        {
          href: '#',
          icon: 'bi bi-signpost-split',
          innerText: 'Guia do Aluno',
        },
        {
          href: '#',
          icon: 'bi bi-calendar-event',
          innerText: 'Eventos',
        },
        {
          href: '#',
          icon: 'bi bi-people-fill',
          innerText: 'Parceiros',
        },
        {
          href: '#',
          icon: 'bi bi-bookmark-check',
          innerText: 'Projetos',
        },
        {
          href: '#',
          icon: 'bi bi-file-earmark-person',
          innerText: 'Currículo',
        },
      ],
    },
  };
  readonly regularFooterModel: IRegularFooter = {
    infos: [
      {
        title: "Horário de Atendimento",
        messages: [
          "Terça: 17h00 às 19h00",
          "Quinta: 17h00 às 19h00"
        ]
      },
      {
        title: "Local",
        messages: [
          "Sala Núcleo de TI",
          "Block F - Piso Térreo"
        ]
      },
    ],
    links: this.socialMedias,
  };
}

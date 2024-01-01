import { Injectable } from '@angular/core';
import { IRegularHeader } from '../../models.layout/regular-header/regular-header';
import { UiThemeService } from '../uiTheme/ui-theme.service';

@Injectable({
  providedIn: 'root',
})
export class HomePageHeaderService {
  private readonly uiThemeService = new UiThemeService();
  public readonly model: IRegularHeader = {
    socialHub: {
      title: {
        innerText: 'CENTRAL DE ATENDIMENTO',
        href: "#"
      },
      links: [
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
      ],
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
          href: 'about',
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
}

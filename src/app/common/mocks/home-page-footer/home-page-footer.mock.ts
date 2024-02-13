import { Injectable } from '@angular/core';
import { IRegularFooter } from '../../models/regular-footer/regular-footer';

@Injectable({
  providedIn: 'root',
})
export class HomePageFooterMock{
  readonly model: IRegularFooter = {
    infos: [
      {
        title: 'Horário de Atendimento',
        messages: ['Terça: 17h00 às 19h00', 'Quinta: 17h00 às 19h00'],
      },
      {
        title: 'Local',
        messages: ['Sala Núcleo de TI', 'Bloco F - Piso Térreo'],
      },
    ],
    links: [
      {
        href: 'https://www.facebook.com/nucleodetiuniso/',
        icon: 'bi bi-facebook',
      },
      {
        href: 'https://www.instagram.com/nucleodeti_uniso/',
        icon: 'bi bi-instagram',
      },
      {
        href: 'mailto:nucleodeti.uniso@gmail.com',
        icon: 'bi bi-envelope-at',
      },
    ],
  };
}

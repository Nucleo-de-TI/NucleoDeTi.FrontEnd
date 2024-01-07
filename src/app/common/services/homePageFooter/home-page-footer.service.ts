import { Injectable } from '@angular/core';
import { IRegularFooter } from '../../models/regular-footer/regular-footer';

@Injectable({
  providedIn: 'root',
})
export class HomePageFooterService {
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
  };
}

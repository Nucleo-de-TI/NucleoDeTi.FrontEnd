import { Injectable } from '@angular/core';
import { IRegularHeader } from '../../models/regular-header/regular-header';

@Injectable({
  providedIn: 'root',
})
export class HomePageHeaderMock {
  readonly model: IRegularHeader = {
    action: {
      links: [
        {
          href: 'about',
          icon: 'bi bi-building',
          innerText: 'Sobre',
        },
        {
          href: 'courses',
          icon: 'bi bi-book',
          innerText: 'Cursos',
        },
        {
          href: 'student-guide',
          icon: 'bi bi-signpost-split',
          innerText: 'Guia do Aluno',
        },
        {
          href: 'events',
          icon: 'bi bi-calendar-event',
          innerText: 'Eventos',
        },
        {
          href: 'partners',
          icon: 'bi bi-people-fill',
          innerText: 'Parceiros',
        },
      ],
    },
  };
}

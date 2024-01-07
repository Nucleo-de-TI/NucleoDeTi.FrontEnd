import { Component } from '@angular/core';
import { RegularSectionBoxComponent } from '../../../../components.shared/regular-section-box/regular-section-box.component';
import { RegularSectionBoxTitleComponent } from '../../../../components.shared/regular-section-box-title/regular-section-box-title.component';
import { RegularFlexBoxComponent } from '../../../../components.shared/regular-flex-box/regular-flex-box.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-relembre',
  standalone: true,
  templateUrl: './relembre.component.html',
  styleUrl: './relembre.component.scss',
  imports: [
    CommonModule,
    RegularSectionBoxComponent,
    RegularSectionBoxTitleComponent,
    RegularFlexBoxComponent,
  ],
})
export class RelembreComponent {
  readonly events = [
    [
      {
        title: 'Jornada Acadêmica 2022',
        img: './assets/images/general/dlhugvtewzeh.png',
      },
      {
        title: 'Welcome 2023/01',
        img: './assets/images/general/dlhugvtewzeh.png',
      },
      {
        title: 'Dia internacional da Mulher 2023',
        img: './assets/images/general/dlhugvtewzeh.png',
      },
    ],
    [
      {
        title: 'Jornada Acadêmica 2023',
        img: './assets/images/general/dlhugvtewzeh.png',
      },
      {
        title: 'Visita Técnica - Senior Mega',
        img: './assets/images/general/dlhugvtewzeh.png',
      },
      {
        title: 'Projeto Integrador 2023/02',
        img: './assets/images/general/dlhugvtewzeh.png',
      },
    ],
  ];
}

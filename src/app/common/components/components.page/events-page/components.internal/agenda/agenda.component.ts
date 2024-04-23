import { Component } from '@angular/core';
import { RegularSectionBoxTitleComponent } from '../../../../components.shared/regular-section-box-title/regular-section-box-title.component';
import { RegularVerticalPaddingComponent } from '../../../../components.shared/regular-vertical-padding/regular-vertical-padding.component';
import { RegularSectionBoxComponent } from '../../../../components.shared/regular-section-box/regular-section-box.component';
import { RegularListComponent } from '../../../../components.shared/regular-list/regular-list.component';
import { RegularTextComponent } from '../../../../components.shared/regular-text/regular-text.component';
import { MediumTextComponent } from '../../../../components.shared/medium-text/medium-text.component';
import { CommonModule } from '@angular/common';
import { SmallVerticalPaddingComponent } from "../../../../components.shared/small-vertical-padding/small-vertical-padding.component";

@Component({
    selector: 'app-agenda',
    standalone: true,
    templateUrl: './agenda.component.html',
    styleUrl: './agenda.component.scss',
    imports: [
        CommonModule,
        RegularSectionBoxTitleComponent,
        RegularVerticalPaddingComponent,
        RegularSectionBoxComponent,
        RegularListComponent,
        RegularTextComponent,
        MediumTextComponent,
        SmallVerticalPaddingComponent
    ]
})
export class AgendaComponent {
  readonly events = [
    {
      date: '15/02',
      text: 'Início das Aulas - Welcome',
    },
    {
      date: '24/02',
      text: 'Curso extra',
    },
    {
      date: '20/04',
      text: 'Curso extra',
    },   
    {
      date: '27/04',
      text: 'Curso extra',
    },
    {
      date: '04/05',
      text: 'Curso extra',
    },
    {
      date: '18/05',
      text: 'Curso extra',
    },
    {
      date: '08/06',
      text: 'Projeto Integrador 2024/01',
    },
  ];
}

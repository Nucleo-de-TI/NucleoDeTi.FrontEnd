import { Component } from '@angular/core';
import { RegularSectionBoxComponent } from '../../../../components.shared/regular-section-box/regular-section-box.component';
import { RegularSectionBoxTitleComponent } from '../../../../components.shared/regular-section-box-title/regular-section-box-title.component';
import { SmallVerticalPaddingComponent } from '../../../../components.shared/small-vertical-padding/small-vertical-padding.component';
import { SmallSectionBoxComponent } from '../../../../components.shared/small-section-box/small-section-box.component';
import { SmallSectionBoxTitleComponent } from '../../../../components.shared/small-section-box-title/small-section-box-title.component';
import { BorderTextLinkComponent } from '../../../../components.shared/border-text-link/border-text-link.component';
import { RegularFlexBoxComponent } from '../../../../components.shared/regular-flex-box/regular-flex-box.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-guia-do-aluno',
    standalone: true,
    templateUrl: './guia-do-aluno.component.html',
    styleUrl: './guia-do-aluno.component.scss',
    imports: [
        CommonModule,
        RegularSectionBoxComponent,
        RegularSectionBoxTitleComponent,
        SmallVerticalPaddingComponent,
        SmallSectionBoxComponent,
        SmallSectionBoxTitleComponent,
        BorderTextLinkComponent,
        RegularFlexBoxComponent,
    ]
})
export class GuiaDoAlunoComponent {
  readonly studentGuides = [
    {
      course: 'Análise e Desenvolvimento de Sistemas',
      downloadLink: './assets/docs/Guia_Estudante_ADS_UNISO.pdf',
    },
    {
      course: 'Ciência de Dados e Inteligência Artificial',
      downloadLink: './assets/docs/Guia_Estudante_CDI_UNISO.pdf',
    },
    {
      course: 'Engenharia da Computação',
      downloadLink: './assets/docs/Guia_Estudante_ECP_UNISO.pdf',
    },
  ];
}

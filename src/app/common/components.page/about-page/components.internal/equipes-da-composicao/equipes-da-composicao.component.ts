import { Component } from '@angular/core';
import { RegularVerticalPaddingComponent } from '../../../../components.shared/regular-vertical-padding/regular-vertical-padding.component';
import { RegularSectionBoxTitleComponent } from '../../../../components.shared/regular-section-box-title/regular-section-box-title.component';
import { RegularSectionBoxComponent } from '../../../../components.shared/regular-section-box/regular-section-box.component';
import { RegularFlexBoxComponent } from '../../../../components.shared/regular-flex-box/regular-flex-box.component';
import { RegularTextComponent } from '../../../../components.shared/regular-text/regular-text.component';
import { MediumTextComponent } from '../../../../components.shared/medium-text/medium-text.component';
import { RegularListComponent } from '../../../../components.shared/regular-list/regular-list.component';
import { CommonModule, NgFor } from '@angular/common';
import { SmallVerticalPaddingComponent } from '../../../../components.shared/small-vertical-padding/small-vertical-padding.component';

@Component({
  selector: 'app-equipes-da-composicao',
  standalone: true,
  templateUrl: './equipes-da-composicao.component.html',
  styleUrl: './equipes-da-composicao.component.scss',
  imports: [
    CommonModule,
    RegularVerticalPaddingComponent,
    RegularSectionBoxTitleComponent,
    RegularSectionBoxComponent,
    RegularFlexBoxComponent,
    RegularTextComponent,
    MediumTextComponent,
    RegularListComponent,
    SmallVerticalPaddingComponent,
  ],
})
export class EquipesDaComposicaoComponent {
  public readonly equipes = [
    {
      title: {
        innerText: 'Cordenadores',
        icon: 'bi bi-alarm',
      },
      list: [
        'Professor Mestre Richardson Kennedy Luz;',
        'Professor Mestre Denicezar Angelo Baldo.',
      ],
    },
    {
      title: {
        innerText: 'Administrativo',
        icon: 'bi bi-alarm',
      },
      list: [
        'Desenvolvimento do Manual do aluno do curso;',
        'Suporte a Todas as equipes.',
      ],
    },
    {
      title: {
        innerText: 'Desenvolvimento',
        icon: 'bi bi-alarm',
      },
      list: ['Desenvolver e manter atualizado o manual do aluno virtual.'],
    },
    {
      title: {
        innerText: 'Design',
        icon: 'bi bi-alarm',
      },
      list: ['Criação de imagens;', 'Obtenção de artes para os eventos.'],
    },
    {
      title: {
        innerText: 'Eventos',
        icon: 'bi bi-alarm',
      },
      list: [
        'Recepcionar e organizar o evento e convite as empresas;',
        'Palestras;',
        'Workshops;',
      ],
    },
    {
      title: {
        innerText: 'Mídias Sociais',
        icon: 'bi bi-alarm',
      },
      list: [
        'Cuidar do engajamento e criação de conteúdo para o Facebook, Instagram e LinkedIn;',
        'Administrar as redes sociais do GENTI.',
      ],
    },
    {
      title: {
        innerText: 'Welcome',
        icon: 'bi bi-alarm',
      },
      list: [
        'Gerenciar toda a inclusão de novos alunos na Universidade (Manual Acadêmico, e-mail de boas-vindas e entre outros).',
      ],
    },
    {
      title: {
        innerText: 'Ações Sociais',
        icon: 'bi bi-alarm',
      },
      list: [
        'Ações sociais presencialmente e virtuais;',
        'Ações internas e em parcerias com outros cursos, UNISO e Sociedade',
      ],
    },
    {
      title: {
        innerText: 'Games',
        icon: 'bi bi-alarm',
      },
      list: ['Criar equipes para treinar e participar de campeonatos'],
    },
  ];
}

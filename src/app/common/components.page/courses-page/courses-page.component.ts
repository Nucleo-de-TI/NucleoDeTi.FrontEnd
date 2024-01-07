import { Component } from '@angular/core';
import { HomePageHeaderService } from '../../services/homePageHeader/home-page-header.service';
import { HomePageFooterService } from '../../services/homePageFooter/home-page-footer.service';
import { RegularHeaderComponent } from '../../components.layout/regular-header/regular-header.component';
import { RegularFooterComponent } from '../../components.layout/regular-footer/regular-footer.component';
import { CourseComponent } from './components.internal/course/course.component';
import { ICourse } from './models.internal/course/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses-page',
  standalone: true,
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.scss',
  imports: [
    CommonModule,
    RegularHeaderComponent,
    RegularFooterComponent,
    CourseComponent,
  ],
})
export class CoursesPageComponent {
  readonly homePageHeaderService = new HomePageHeaderService();
  readonly homePageFooterService = new HomePageFooterService();
  readonly courseModels: ICourse[] = [
    {
      title: {
        innerText: 'Análise e Desenvolvimento de Sistemas',
        icon: 'bi bi-code-slash',
      },
      infoTexts: [
        {
          title: 'Objetivo Geral',
          text: 'Capacitar os estudantes, por meio de um itinerário formativo interdisciplinar e prático, a atuarem na área de TI (Tecnologia da Informação) com as atividades de análise, projeto, desenvolvimento, gerenciamento e implantação de sistemas de informação computacionais, compreendendo as áreas funcionais, processos organizacionais, departamentais e individuais, direcionados para o mercado de trabalho corporativo.',
        },
        {
          title: 'Campo de Atuação',
          text: 'O profissional em Tecnologia da Informação pode atuar como pesquisador, professor, consultor, analista de sistemas, gerente de projetos, analista de suporte, gerente de TI, administrador de banco de dados, administrador de redes, analista de segurança, arquiteto de software, engenheiro de software, envolvendo-se em diversas áreas como banco de dados, business intelligence, computação móvel, gestão de conteúdo, informática na educação, inteligência artificial, jogos digitais, sistemas de informação geográficos, software livre, usabilidade e acessibilidade de softwares, gestão de TI e inovação, assessoria e consultoria de TI, gestão de projetos de software, administração de sistemas de informação, desenvolvimento de sistemas desktop, web e móvel, análise de negócio e projeto de interface.',
        },
      ],
      accordions: [
        {
          title: 'Objetivos do Curso de ADS',
          list: [
            'Explorar, de forma enfática, o uso de recursos computacionais para o projeto e construção de software;',
            'Fornecer ao aluno sólido domínio nas matérias de programação, engenharia de software e sistemas de informação aplicados;',
            'Possibilitar uma visão interdisciplinar dos saberes que foram transmitidos e da aplicação destes saberes no contexto profissional onde o egresso irá exercê-los;',
            'Propiciar ao educando outros saberes básicos, tais como: arquitetura de computadores, sistemas operacionais, redes de computadores e desenvolvimento web;',
            'Formar profissionais aptos a inovar, planejar e gerenciar a infraestrutura da informação, capazes de desenvolver, evoluir e intervir nas áreas das Tecnologias e Sistemas de Informação, com competência e ética, de forma que o capacite a atuar nos diferentes cenários da prática profissional;',
            'Desenvolver alguns saberes coadjuvantes, como comunicação e expressão e gestão de serviços, permitindo que o tecnólogo em Análise e Desenvolvimento de Sistemas atue como empreendedor em sua área de atuação.',
          ],
        },
        {
          title: 'Base Legal',
          list: [
            'Autorização: Resolução Consu n° 016/19;',
            'Publicado em 26/03/2019.',
          ],
        },
      ],
    },
    {
      title: {
        innerText: 'Análise e Desenvolvimento de Sistemas',
        icon: 'bi bi-code-slash',
      },
      infoTexts: [
        {
          title: 'Objetivo Geral',
          text: 'Capacitar os estudantes, por meio de um itinerário formativo interdisciplinar e prático, a atuarem na área de TI (Tecnologia da Informação) com as atividades de análise, projeto, desenvolvimento, gerenciamento e implantação de sistemas de informação computacionais, compreendendo as áreas funcionais, processos organizacionais, departamentais e individuais, direcionados para o mercado de trabalho corporativo.',
        },
        {
          title: 'Campo de Atuação',
          text: 'O profissional em Tecnologia da Informação pode atuar como pesquisador, professor, consultor, analista de sistemas, gerente de projetos, analista de suporte, gerente de TI, administrador de banco de dados, administrador de redes, analista de segurança, arquiteto de software, engenheiro de software, envolvendo-se em diversas áreas como banco de dados, business intelligence, computação móvel, gestão de conteúdo, informática na educação, inteligência artificial, jogos digitais, sistemas de informação geográficos, software livre, usabilidade e acessibilidade de softwares, gestão de TI e inovação, assessoria e consultoria de TI, gestão de projetos de software, administração de sistemas de informação, desenvolvimento de sistemas desktop, web e móvel, análise de negócio e projeto de interface.',
        },
      ],
      accordions: [
        {
          title: 'Objetivos do Curso de ADS',
          list: [
            'Explorar, de forma enfática, o uso de recursos computacionais para o projeto e construção de software;',
            'Fornecer ao aluno sólido domínio nas matérias de programação, engenharia de software e sistemas de informação aplicados;',
            'Possibilitar uma visão interdisciplinar dos saberes que foram transmitidos e da aplicação destes saberes no contexto profissional onde o egresso irá exercê-los;',
            'Propiciar ao educando outros saberes básicos, tais como: arquitetura de computadores, sistemas operacionais, redes de computadores e desenvolvimento web;',
            'Formar profissionais aptos a inovar, planejar e gerenciar a infraestrutura da informação, capazes de desenvolver, evoluir e intervir nas áreas das Tecnologias e Sistemas de Informação, com competência e ética, de forma que o capacite a atuar nos diferentes cenários da prática profissional;',
            'Desenvolver alguns saberes coadjuvantes, como comunicação e expressão e gestão de serviços, permitindo que o tecnólogo em Análise e Desenvolvimento de Sistemas atue como empreendedor em sua área de atuação.',
          ],
        },
        {
          title: 'Base Legal',
          list: [
            'Autorização: Resolução Consu n° 016/19;',
            'Publicado em 26/03/2019.',
          ],
        },
      ],
    },
    {
      title: {
        innerText: 'Análise e Desenvolvimento de Sistemas',
        icon: 'bi bi-code-slash',
      },
      infoTexts: [
        {
          title: 'Objetivo Geral',
          text: 'Capacitar os estudantes, por meio de um itinerário formativo interdisciplinar e prático, a atuarem na área de TI (Tecnologia da Informação) com as atividades de análise, projeto, desenvolvimento, gerenciamento e implantação de sistemas de informação computacionais, compreendendo as áreas funcionais, processos organizacionais, departamentais e individuais, direcionados para o mercado de trabalho corporativo.',
        },
        {
          title: 'Campo de Atuação',
          text: 'O profissional em Tecnologia da Informação pode atuar como pesquisador, professor, consultor, analista de sistemas, gerente de projetos, analista de suporte, gerente de TI, administrador de banco de dados, administrador de redes, analista de segurança, arquiteto de software, engenheiro de software, envolvendo-se em diversas áreas como banco de dados, business intelligence, computação móvel, gestão de conteúdo, informática na educação, inteligência artificial, jogos digitais, sistemas de informação geográficos, software livre, usabilidade e acessibilidade de softwares, gestão de TI e inovação, assessoria e consultoria de TI, gestão de projetos de software, administração de sistemas de informação, desenvolvimento de sistemas desktop, web e móvel, análise de negócio e projeto de interface.',
        },
      ],
      accordions: [
        {
          title: 'Objetivos do Curso de ADS',
          list: [
            'Explorar, de forma enfática, o uso de recursos computacionais para o projeto e construção de software;',
            'Fornecer ao aluno sólido domínio nas matérias de programação, engenharia de software e sistemas de informação aplicados;',
            'Possibilitar uma visão interdisciplinar dos saberes que foram transmitidos e da aplicação destes saberes no contexto profissional onde o egresso irá exercê-los;',
            'Propiciar ao educando outros saberes básicos, tais como: arquitetura de computadores, sistemas operacionais, redes de computadores e desenvolvimento web;',
            'Formar profissionais aptos a inovar, planejar e gerenciar a infraestrutura da informação, capazes de desenvolver, evoluir e intervir nas áreas das Tecnologias e Sistemas de Informação, com competência e ética, de forma que o capacite a atuar nos diferentes cenários da prática profissional;',
            'Desenvolver alguns saberes coadjuvantes, como comunicação e expressão e gestão de serviços, permitindo que o tecnólogo em Análise e Desenvolvimento de Sistemas atue como empreendedor em sua área de atuação.',
          ],
        },
        {
          title: 'Base Legal',
          list: [
            'Autorização: Resolução Consu n° 016/19;',
            'Publicado em 26/03/2019.',
          ],
        },
      ],
    },
  ];

  constructor() {
    this.homePageHeaderService.model.action.links[1].selected = true;
  }
}

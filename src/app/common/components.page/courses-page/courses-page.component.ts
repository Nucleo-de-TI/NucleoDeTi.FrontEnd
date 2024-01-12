import { Component } from '@angular/core';
import { HomePageHeaderService } from '../../services/homePageHeader/home-page-header.service';
import { HomePageFooterService } from '../../services/homePageFooter/home-page-footer.service';
import { RegularHeaderComponent } from '../../components.layout/regular-header/regular-header.component';
import { RegularFooterComponent } from '../../components.layout/regular-footer/regular-footer.component';
import { CourseComponent } from './components.internal/course/course.component';
import { ICourse } from './models.internal/course/course';
import { CommonModule } from '@angular/common';
import { SmallVerticalPaddingComponent } from '../../components.shared/small-vertical-padding/small-vertical-padding.component';
import { RegularMainComponent } from '../../components.shared/regular-main/regular-main.component';

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
    SmallVerticalPaddingComponent,
    RegularMainComponent,
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
        innerText: 'Ciência de Dados e Inteligência Artificial',
        icon: 'bi bi-cpu',
      },
      infoTexts: [
        {
          title: 'Objetivo Geral',
          text: 'Fornecer a base e as habilidades avançadas nos princípios e tecnologias subjacentes à Ciência de Dados e Inteligência Artificial, incluindo lógica, representação do conhecimento, modelos probabilísticos e aprendizado de máquina e ferramentas relacionadas. Suprir a demanda de um novo tipo de profissional, especializado na extração de resultados mediante construção e análise de dados e preparado para tomada de decisão, bem como apto a trabalhar com predição nas organizações, por meio de uma aprendizagem totalmente integrada.',
        },
        {
          title: 'Campo de Atuação',
          text: 'O Bacharelado em Ciência de Dados e Inteligência Artificial da Uniso visa capacitar profissionais para gerar informações úteis ao negócio, utilizando técnicas de Data Science e Inteligência Artificial. O curso desenvolve competências na exploração e análise de dados, aplicando técnicas de Inteligência Artificial. Os graduados serão proficientes em projetar, desenvolver, testar, validar e implementar soluções algorítmicas de Machine Learning e Inteligência Artificial, proporcionando respostas ágeis e eficientes para diversos problemas. Além disso, estarão preparados para aplicar tecnologias diversas em modelos de dados, contribuindo para a tomada de decisões estratégicas com foco na minimização de custos e otimização de processos.',
        },
      ],
      accordions: [
        {
          title: 'Objetivos do Curso de CDI',
          list: [
            'Usar dados para resolver desafios complexos;',
            'Criar máquinas inteligentes;',
            'Auxiliar a tomada de decisão, por meio de informações extraídas dos dados, utilizando análises, diagnósticos, padrões e predições;',
            'Formar líderes de equipes, dominando cada fase dos projetos estratégicos de tomada e apoio à decisão;',
            'Desenvolver capacitação da visão técnica e interdisciplinar, criando no aluno uma capacidade de adaptação e solução rápida de problemas;',
            'Desenvolver a aquisição de um conjunto de habilidades analíticas de dados principais juntamente com habilidades técnicas especializadas ou aplicativos específicos do setor.',
          ],
        },
        {
          title: 'Base Legal',
          list: [
            'Autorização: Resolução Consu n° 040/20;',
            'Publicado em 28/09/2020.',
          ],
        },
      ],
    },
    {
      title: {
        innerText: 'Engenharia da Computação',
        icon: 'bi bi-gear-wide-connected',
      },
      infoTexts: [
        {
          title: 'Objetivo Geral',
          text: 'O objetivo geral do Curso é formar engenheiros de computação generalistas, criativos, competentes e críticos, para gerenciar, projetar, desenvolver, planejar e implementar soluções que permitam o desenvolvimento de tecnologias computacionais, nos mais diversos setores econômicos, com excelência técnica-científica. O profissional formado deve recorrer aos princípios da computação e técnicas de implementação de hardware e software para produzir sistemas digitais integrados.',
        },
        {
          title: 'Campo de Atuação',
          text: 'O Engenheiro de Computação é um profissional generalista que atua na informática industrial, redes industriais, sistemas de informação aplicados à engenharia, sistemas de computação e computação embarcada. Ele especifica, desenvolve, implementa, adapta, industrializa, instala e mantém sistemas computacionais, integrando recursos físicos e lógicos para atender às necessidades informacionais, computacionais e de automação de organizações. Além disso, projeta, desenvolve e implementa equipamentos e dispositivos computacionais, coordenando equipes, realizando estudos de viabilidade técnico-econômica, executando obras e serviços técnicos, e efetuando vistorias e avaliações, emitindo laudos e pareceres.',
        },
      ],
      accordions: [
        {
          title: 'Objetivos do Curso de EC',
          list: [
            'Orientar o graduando para construir sua identidade profissional, com competência e ética, de forma que o capacite a atuar nos diferente cenários da prática profissional;',
            'Proporcionar educação integral para o trabalho multidisciplinar e intersetorial em engenharia e computação;',
            'Formar profissionais que possam contribuir para o desenvolvimento científico e tecnológico de Sorocaba e região;',
            'Formar profissionais conscientes de seu papel na sociedade e conhecedores dos problemas do mundo presente, em particular os nacionais regionais, e também prestar serviços especializados à comunidade;',
            'Incentivar o discente no trabalho de pesquisa e investigação científica, visando ao desenvolvimento da ciência e da tecnologia e da criação difusão da cultura.'
          ],
        },
        {
          title: 'Base Legal',
          list: [
            'Início de Funcionamento: 08/02/2010. ',
            'Autorização: Resolução Consu 026/2009, publicada em 25/08/2009.',
            'Reconhecimento: Portaria nº 44/2015, publicada no Diário Oficial da União em 23/01/2015.',
            'Renovação de Reconhecimento: Portaria SERES nº 110/2021, publicada no Diário Oficial da União, em 05/02/2021.'
          ],
        },
      ],
    },
  ];

  constructor() {
    this.homePageHeaderService.model.action.links[1].selected = true;
  }
}

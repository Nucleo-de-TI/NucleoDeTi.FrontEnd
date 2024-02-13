import { Component } from '@angular/core';
import { RegularHeaderComponent } from '../../components.layout/regular-header/regular-header.component';
import { RegularFooterComponent } from '../../components.layout/regular-footer/regular-footer.component';
import { CourseComponent } from './components.internal/course/course.component';
import { ICourse } from './models.internal/course/course';
import { CommonModule } from '@angular/common';
import { SmallVerticalPaddingComponent } from '../../components.shared/small-vertical-padding/small-vertical-padding.component';
import { RegularMainComponent } from '../../components.shared/regular-main/regular-main.component';
import { HomePageFooterMock } from '../../../mocks/home-page-footer/home-page-footer.mock';
import { HomePageHeaderMock } from '../../../mocks/home-page-header/home-page-header.mock';
import { CoursesInfoMock } from '../../../mocks/courses-info/courses-info.mock';

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
  readonly coursesModel: ICourse[];

  constructor(
    readonly homePageHeaderMock: HomePageHeaderMock,
    readonly homePageFooterMock: HomePageFooterMock,
    private readonly coursesInfoMock: CoursesInfoMock
  ) {
    this.homePageHeaderMock.model.action.links[1].selected = true;
    this.coursesModel = this.coursesInfoMock.model;
  }
}

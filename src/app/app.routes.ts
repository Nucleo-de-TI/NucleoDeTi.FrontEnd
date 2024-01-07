import { Routes } from '@angular/router';
import { HomePageComponent } from './common/components.page/home-page/home-page.component';
import { AboutPageComponent } from './common/components.page/about-page/about-page.component';
import { CoursesPageComponent } from './common/components.page/courses-page/courses-page.component';
import { StudentGuidPageComponent } from './common/components.page/student-guid-page/student-guid-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'courses',
    component: CoursesPageComponent,
  },
  {
    path: 'student-guide',
    component: StudentGuidPageComponent,
  },
];

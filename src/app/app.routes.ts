import { Routes } from '@angular/router';
import { HomePageComponent } from './common/components.page/home-page/home-page.component';
import { AboutPageComponent } from './common/components.page/about-page/about-page.component';
import { CoursesPageComponent } from './common/components.page/courses-page/courses-page.component';
import { StudentGuidPageComponent } from './common/components.page/student-guid-page/student-guid-page.component';
import { EventsPageComponent } from './common/components.page/events-page/events-page.component';
import { PartnersPageComponent } from './common/components.page/partners-page/partners-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
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
  {
    path: 'events',
    component: EventsPageComponent,
  },
  {
    path: 'partners',
    component: PartnersPageComponent,
  },
];

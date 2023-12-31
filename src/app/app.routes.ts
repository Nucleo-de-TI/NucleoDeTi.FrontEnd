import { Routes } from '@angular/router';
import { HomePageComponent } from './common/components.page/home-page/home-page.component';
import { AboutPageComponent } from './common/components.page/about-page/about-page.component';

export const routes: Routes = [
      {
            path: "",
            component: HomePageComponent
      },
      {
            path: "about",
            component: AboutPageComponent
      }
];

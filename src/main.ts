import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent,
  {
    providers: [
      provideRouter([
        {
          path: '',
          title: 'Home',
          loadComponent: () =>  import('@pages/home/home.component').then(mod => mod.HomeComponent),
          pathMatch: 'full',
        },
        {
          path: 'about',
          title: 'About us',
          loadComponent: () =>  import('@pages/about/about.component').then(mod => mod.AboutComponent),
        },
        {
          path: 'plan',
          title: 'Plan',
          loadComponent: () =>  import('@pages/plan/plan.component').then(mod => mod.PlanComponent),
        }
      ]),
    ]
  }
);

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'stories',
    loadComponent: () =>
      import('./pages/stories/stories.component').then(
        (m) => m.StoriesComponent
      ),
  },
  {
    path: 'features',
    loadComponent: () =>
      import('./pages/features/features.component').then(
        (m) => m.FeaturesComponent
      ),
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./pages/pricing/pricing.component').then(
        (m) => m.PricingComponent
      ),
  },
];

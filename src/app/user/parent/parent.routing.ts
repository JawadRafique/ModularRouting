import { Routes } from '@angular/router';

export const parentRoutes: Routes = [
    {
      path: '',
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'login',
      loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },  
    {
        path: 'signup',
        loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)
    }
  ];
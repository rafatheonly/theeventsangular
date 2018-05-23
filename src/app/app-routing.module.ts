import { NgModule } from '@angular/core';
import { Routes, ActivatedRoute, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
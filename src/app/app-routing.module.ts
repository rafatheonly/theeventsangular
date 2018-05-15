import { Routes, ActivatedRoute } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';

export const ROUTES: Routes = [
  { path: '', component: ContentComponent },
  { path: 'login', component: LoginComponent }
];



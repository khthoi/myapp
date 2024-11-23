import { Routes } from '@angular/router';
import { MaincontentComponent } from './component/maincontent/maincontent.component';
import { BlogComponent } from './component/blog/blog.component';


export const routes: Routes = [
  { path: 'home', component: MaincontentComponent },
  { path: 'blog', component:BlogComponent },
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: '**', redirectTo: 'home', pathMatch:'full'}
];

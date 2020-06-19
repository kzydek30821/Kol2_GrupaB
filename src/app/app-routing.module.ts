import { KzForumItemComponent } from './components/kz-forum-item/kz-forum-item.component';
import { KzForumDetailsComponent } from './components/kz-forum-details/kz-forum-details.component';
import { KzForumComponent } from './components/kz-forum/kz-forum.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'app-kz-forum',
  component: KzForumComponent,
},
{
  path: 'app-kz-forum-item',
  component: KzForumItemComponent,
},
{
  path: 'app-kz-forum-detail',
  component: KzForumDetailsComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

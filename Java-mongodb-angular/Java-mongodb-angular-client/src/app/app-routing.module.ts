import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { NuevoPostComponent } from './nuevo-post/nuevo-post.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: "/post",
    pathMatch: "full"
  },
  {
    path:"posts",
    component:PostComponent
  },
  {
    path:"nuevo-post",
    component: NuevoPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

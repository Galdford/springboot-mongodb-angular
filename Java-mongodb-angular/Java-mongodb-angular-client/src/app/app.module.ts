import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NuevoPostComponent } from './nuevo-post/nuevo-post.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { ComentarioComponent } from './comentario/comentario.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NuevoPostComponent,
    PostComponent,
    PostsComponent,
    ComentarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

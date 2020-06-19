import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KzForumComponent } from './components/kz-forum/kz-forum.component';
import { KzForumItemComponent } from './components/kz-forum-item/kz-forum-item.component';
import { KzForumDetailsComponent } from './components/kz-forum-details/kz-forum-details.component';

@NgModule({
  declarations: [
    AppComponent,
    KzForumComponent,
    KzForumItemComponent,
    KzForumDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntroComponent } from './home/intro/intro.component';
import { StoryComponent } from './home/story/story.component';
import { BlogComponent } from './home/blog/blog.component';
import { ContactComponent } from './home/contact/contact.component';
import { ParticlesComponent } from './particles/particles.component';
import { ArticlesComponent } from './home/blog/articles/articles.component';
import { Routes, RouterModule } from '@angular/router';
import { WebglComponent } from './home/webgl/webgl.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    StoryComponent,
    BlogComponent,
    ContactComponent,
    ParticlesComponent,
    ArticlesComponent,
    WebglComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        { path: 'home', component: WebglComponent},
        { path: 'webgl', component: WebglComponent},
        { path: '**', component: WebglComponent  }
      ]
  )],
  providers: [],
  bootstrap: [AppComponent],
})


export class AppModule {}

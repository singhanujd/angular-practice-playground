import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { HeroService } from './heroes/hero.service';
import { PracticeContentchildComponent } from './practice-contentchild/practice-contentchild.component';
import { Tab } from './practice-contentchild/practice-contentchild.component';
import { Pane } from './practice-contentchild/practice-contentchild.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroListComponent,
    PracticeContentchildComponent,
    Tab,
    Pane
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

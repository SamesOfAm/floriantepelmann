import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule} from '@angular/http';
import { WorksService} from './works.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { ProgramComponent } from './program/program.component';
import { AboutComponent } from './about/about.component';
import { LinksComponent } from './links/links.component';
import { MainContentComponent } from './main-content/main-content.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MusicComponent,
    ProgramComponent,
    AboutComponent,
    LinksComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpModule
  ],
  providers: [WorksService],
  bootstrap: [AppComponent]
})
export class AppModule { }

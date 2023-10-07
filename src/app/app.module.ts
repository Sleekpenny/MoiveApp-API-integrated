import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeachMoviesComponent } from './seach-movies/seach-movies.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { APIcallService } from './service/apicall.service';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SeachMoviesComponent,
    HomeScreenComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbCarouselModule,
    FormsModule
  ],
  providers: [APIcallService],
  bootstrap: [AppComponent]
})
export class AppModule { }

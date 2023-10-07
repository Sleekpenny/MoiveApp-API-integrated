import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeachMoviesComponent } from './seach-movies/seach-movies.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {path: "", component: HomeScreenComponent },
  {path: "SeacrhMovies" , component: SeachMoviesComponent},
  {path: 'movie/:id', component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

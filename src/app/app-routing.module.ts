import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesCompoent } from './movies/movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  { path: '', redirectTo:'/dashboard', pathMatch:'full'},
  { path: 'dashboard', component:DashboardComponent },
  { path: 'movies', component:MoviesCompoent },
  { path: 'detail/:id', component:MovieDetailComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {}



@NgModule({
  exports:[
    RouterModule
  ],

  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

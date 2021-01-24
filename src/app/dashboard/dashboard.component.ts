import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies:Movie[]=[]
  movieLength:number;

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.gerMovies()
  }
  gerMovies():void{
    this.movieService.getMovies()
    .subscribe(movies =>{
      {
        this.movies = movies.slice(0,5);
        this.movieLength = movies.length;
      }
    })
  }

}

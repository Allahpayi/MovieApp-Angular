import { Component } from '@angular/core';
import { Movie } from '../Movie'
import { MovieService } from '../movie.services'
@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html'
})
export class MoviesCompoent {
    title = 'Movie List';
    movies: Movie[];
    selectedMovie: Movie;

    constructor(private movieServices: MovieService) { }

    ngOnInit(): void {
        this.getMovies()

    }
    onSelect(movie: Movie): void {
        this.selectedMovie = movie;
    }

    getMovies(): void {
        this.movieServices.getMovies()
            .subscribe(movies => {
                this.movies = movies;
            })
    }
}
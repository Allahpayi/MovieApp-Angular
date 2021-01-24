import { Component,OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.services';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'movie-detail',
    templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent {
    @Input() movie: Movie
    constructor(
        private movieService: MovieService,
        private route: ActivatedRoute
    ) { }
    ngOnInit() {
        this.getMovie();

    }
    getMovie(): void {
        const id = +this.route.snapshot.paramMap.get("id");
        this.movieService.getMovie(id)
            .subscribe(movie => this.movie = movie)
    }

}
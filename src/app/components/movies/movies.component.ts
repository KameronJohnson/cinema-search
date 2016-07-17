import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  moduleId: module.id,
  selector: 'movies',
  templateUrl: 'movies.component.html'
})
export class MoviesComponent {
    popularList:Array<Object>;
    searchStr:string;
    searchRes:Array<Object>;
    
    constructor(private _moviesService:MoviesService) {
        this._moviesService.getPopular().subscribe(res => {
            this.popularList = res.results;
        });
    }
    
    searchMovies() {
        this._moviesService.searchMovies(this.searchStr)
            .subscribe(res => {
                this.searchRes = res.results;
            });
    }
}
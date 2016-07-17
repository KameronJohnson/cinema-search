import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  moduleId: module.id,
  selector: 'movies',
  templateUrl: 'movies.component.html'
})
export class MoviesComponent {
    popularList:Array<Object>;
    
    constructor(private _moviesService:MoviesService) {
        this._moviesService.getPopular().subscribe(res => {
            this.popularList = res.results;
        });
    }
}
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetailsComponent } from "./Components/details/details.component";
import { DetailsMoviesComponent } from './Components/details-movies/details-movies.component';
import { DetailsReviewsComponent } from './Components/details-reviews/details-reviews.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DetailsComponent]
})
export class AppComponent {
  title = 'movies';
}

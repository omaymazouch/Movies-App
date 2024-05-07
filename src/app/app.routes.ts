import { Routes } from '@angular/router';
import { DetailsMoviesComponent } from './Components/details-movies/details-movies.component';
import { DetailsComponent } from './Components/details/details.component';
import { DetailsReviewsComponent } from './Components/details-reviews/details-reviews.component';

export const routes: Routes = [
   
{path: 'app-details', component: DetailsComponent},
{path: 'app-details-movies', component: DetailsMoviesComponent},
{path: 'app-details-reviews', component: DetailsReviewsComponent},
];

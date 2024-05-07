import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DetailsMoviesComponent } from '../details-movies/details-movies.component';
import { DetailsReviewsComponent } from '../details-reviews/details-reviews.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DetailsMoviesComponent,DetailsReviewsComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit{

  ngOnInit(): void {
    console.log('ngOnInit is called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges is called');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit is called');
  }
}

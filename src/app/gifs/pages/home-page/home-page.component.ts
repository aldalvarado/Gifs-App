import { Component } from '@angular/core';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { SearchBoxComponent } from '../../components/Search-Box/Search-BoxComponent';

@Component({
  selector: 'gifs-home-page',
  standalone: true,
  imports: [CardListComponent, SearchBoxComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {}

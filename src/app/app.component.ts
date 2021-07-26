import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstMediaItem = {
    id: 1,
    name: 'Firebug',
    medium: 'Series',
    category: 'Science Fiction',
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false
  };
  secondMediaItem = {
    id: 2,
    name: 'How I met your mother',
    medium: 'Series',
    category: 'Sitcom',
    year: 2003,
    watchedOn: 8726387623,
    isFavorite: true
  };
}

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
    watchedOn: null,
    isFavorite: false
  };

  secondMediaItem = {
    id: 2,
    name: 'How I Met Your Mother',
    medium: 'Series',
    category: 'Sitcom',
    year: 2003,
    watchedOn: 1294166565384,
    isFavorite: true
  };

  onMediaItemDelete(mediaItem) {
    return;
  }
}

import {Component} from '@angular/core';
import {NewsService} from "./services/news.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PUI-News';

  constructor(private newsService: NewsService) {
    newsService.setAnonymousApiKey();

    newsService.getArticles().subscribe((data) => { console.log(data); });
  }
}

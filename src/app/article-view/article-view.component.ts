import { Component, OnInit } from '@angular/core';
import { LogInService } from "../services/log-in.service";
import { NewsService } from "../services/news.service";
import { Article } from '../models/article';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {

  article: Article | undefined;
  articleId?: number;
  username?: User;
  date?: string;

  constructor(private newsService: NewsService,
    private loginService: LogInService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.articleId = Number(this.route.snapshot.paramMap.get('articleId'));
    this.newsService.getArticle(this.articleId).subscribe(id => this.article = id);
    this.loginService.getUser();
  }

}

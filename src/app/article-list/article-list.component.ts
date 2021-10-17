import { Component, OnInit } from '@angular/core';
import {Article} from "../models/article";
import {LogInService} from "../services/log-in.service";
import {NewsService} from "../services/news.service";
import {Alert} from "../models/alert";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  categoryList: string[] = ['All', 'National', 'Sports', 'Technology', 'Economy'];
  chosenCategory: string;

  searchQuery: string;

  articleList: Article[];
  article: Article;
  alerts: Alert[];

  constructor(public logInService: LogInService, public newsService: NewsService) {
    this.chosenCategory = 'All';
    this.searchQuery = "";

    this.article = {
      abstract: "",
      body: "",
      category: "",
      file_input: undefined,
      id: 0,
      image_data: "",
      image_media_type: "",
      subtitle: "",
      thumbnail_image: "",
      thumbnail_media_type: "",
      title: ""
    };

    this.articleList = [this.article];
    this.alerts = [];

    // this.articleList = [{id: 0, category: 'Sports', title: 'Female Soccer Players Are Done Taking Abuse. Let’s Stop Dishing It Out.', subtitle:'When will we stop treating women in sports as second-class citizens?', abstract: 'Players in the National Women’s Soccer League are demanding the respect all female athletes deserve but rarely get.', body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image_media_type: ""},
    //   {id: 1, category: 'International', title: 'Boris Johnson: petrol crisis and pig cull part of necessary post-Brexit transition', subtitle: 'Supply chain crisis', abstract: 'Prime minister says UK cannot go back to ‘failed old model’ of immigration and low wages', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image_media_type: ""},
    //   {id: 2, category: 'Economy', title: 'Inside United Airlines’ Decision to Mandate Coronavirus Vaccines', subtitle: 'Vaccination enforcement', abstract: 'Over the course of a year, the company and its unions grappled with when and how to require vaccination for its 67,000 U.S. employees.', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image_media_type: ""},
    //   {id: 3, category: 'Sports', title: 'The Yankees (Mostly) Control Their Fate on Season’s Final Day', subtitle: 'Baseball league', abstract: 'Wins by the Yankees and the Red Sox would give both teams wild-card spots in the playoffs. A loss by either team, or both, could extend the regular season.', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image_media_type: ""},
    //   {id: 3, category: 'Sports', title: 'The Yankees (Mostly) Control Their Fate on Season’s Final Day', subtitle: 'Baseball league', abstract: 'Wins by the Yankees and the Red Sox would give both teams wild-card spots in the playoffs. A loss by either team, or both, could extend the regular season.', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image_media_type: ""},
    //   {id: 3, category: 'Sports', title: 'The Yankees (Mostly) Control Their Fate on Season’s Final Day', subtitle: 'Baseball league', abstract: 'Wins by the Yankees and the Red Sox would give both teams wild-card spots in the playoffs. A loss by either team, or both, could extend the regular season.', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image_media_type: ""},
    //
    // ];

  }

  ngOnInit(): void {
    this.getRemoteArticles();
    for (let article of this.articleList) {
      console.log(article)
    }
  }

  setCategory(category: string) {
    this.chosenCategory = category;
  }

  getRemoteArticles(){
    this.newsService.getArticles().subscribe(list => this.articleList = list);
    console.log(this.articleList)
  }

  deleteArticle(article: Article) {
    if(confirm("Are you sure you want to delete the " + article.title + " article?" )) {
      this.newsService.deleteArticle(article).subscribe(
        article => { // No errors
          this.alerts.push({
            type: 'success',
            message: 'Article deleted',
          });
          this.getRemoteArticles();
        },
          err => { // Error treatment
            this.alerts.push({
              type: 'danger',
              message: 'Article deletion error',
            });
            console.log('error in deletion of article');
            console.log(err);
            this.getRemoteArticles();
          },
          () => { // Operation finished
            console.log('Delete finished');
          }
      );
    }
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
}

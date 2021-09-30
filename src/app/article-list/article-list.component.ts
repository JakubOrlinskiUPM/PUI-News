import { Component, OnInit } from '@angular/core';
import {Article} from "../models/article";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  categoryList: string[] = ['All', 'International', 'National', 'Sports', 'Economy'];
  chosenCategory: string;

  articleList: Article[];

  constructor() {
    this.chosenCategory = 'All';
    this.articleList = [{id: 0, category: 'Sports'}, {id: 1, category: 'International'}];
  }

  ngOnInit(): void {
  }

  setCategory(category: string) {
    this.chosenCategory = category;
  }

}

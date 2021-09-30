import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../models/article";

@Component({
  selector: 'app-article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.css']
})
export class ArticleListItemComponent implements OnInit {

  @Input() article?: Article;

  constructor() {

  }

  ngOnInit(): void {
  }

}

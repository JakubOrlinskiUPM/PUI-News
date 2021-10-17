import {Component, OnInit, ViewChild} from '@angular/core';
import {Article} from "../models/article";
import {NewsService} from '../services/news.service';
import {ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import {Alert} from "../models/alert";


@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  article: Article;
  imageError: string | null;
  isImageSaved: boolean;
  cardImageBase64: string;
  alerts: Alert[];

  @ViewChild('articleForm') articleForm: any;

  constructor(private newsService: NewsService, private route: ActivatedRoute, private router: Router) {
    this.article = {category: "", title: "", subtitle: "", abstract: "", image_media_type: ""};
    this.imageError = "";
    this.cardImageBase64= "";
    this.isImageSaved = true;
    this.alerts = [];

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const paramId = params.get('articleId');
      if(paramId != null){
        this.newsService.getArticle(+paramId).subscribe(
          article => { // No errors
            this.article = article;
            this.article.file_input = this.article.image_data;
          },
          err => { // Error treatment
            console.log('Something goes wrong');
            console.log(err);
          },
          () => { // Operation finished

            console.log('Operation finished');
          }
        );
      }
    })

  }

  sendForm(article:Article): void {
    if(this.article.id == undefined ){
      this.newsService.createArticle(article).subscribe(
        article => { // No errors
          this.alerts.push({
            type: 'success',
            message: 'Article created',
          });
        },
        err => { // Error treatment
          this.alerts.push({
            type: 'danger',
            message: 'Article creation error',
          });
          console.log('error in create article');
          console.log(err);
        },
        () => { // Operation finished
          console.log('Create finished');
        }
      );
    }else {
      this.newsService.updateArticle(article).subscribe(
        article => { // No errors
          this.alerts.push({
            type: 'success',
            message: 'Article updated',
          });
        },
        err => { // Error treatment
          this.alerts.push({
            type: 'danger',
            message: 'Article update error',
          });
          console.log('Update article goes wrong');
          console.log(err);
        },
        () => { // Operation finished
          console.log('Update finished');
        }
      );
    }

  }

  fileChangeEvent(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const MAX_SIZE = 20971520;
      const ALLOWED_TYPES = ['image/png', 'image/jpeg'];

      if (fileInput.target.files[0].size > MAX_SIZE) {
        this.imageError =
          'Maximum size allowed is ' + MAX_SIZE / 1000 + 'Mb';
        return false;
      }
      if (!_.includes(ALLOWED_TYPES, fileInput.target.files[0].type)) {
        this.imageError = 'Only Images are allowed ( JPG | PNG )';
        return false;
      }
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          this.cardImageBase64 = e.target.result;
          this.isImageSaved = true;

          this.article.image_media_type = fileInput.target.files[0].type;
          const head = this.article.image_media_type.length + 13;
          this.article.image_data = e.target.result.substring(head, e.target.result.length);
          console.log(this.article);
          console.log("article");
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
    return true;
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

}

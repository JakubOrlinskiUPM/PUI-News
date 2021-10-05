import {Component, OnInit, ViewChild} from '@angular/core';
import {Article} from "../models/article";
import { NewsService } from '../services/news.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

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
  @ViewChild('articleForm') articleForm: any;

  constructor(private newsService: NewsService, private route: ActivatedRoute) {
    this.article = {category: "", title: "", subtitle: "", abstract: ""};
    this.imageError = "";
    this.cardImageBase64= "";
    this.isImageSaved = true;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const paramId = params.get('articleId');
      if(paramId != null){
        this.newsService.getArticle(+paramId).subscribe(
          article => { // No errors
            this.article = article;
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
    console.log(article.file_input);
    console.log(article);
    if(this.article.id == undefined ){
      //this.newsService.createArticle(article);
    }else {
      //this.newsService.updateArticle(article);
    }

  }

  /*fileChangeEvent(fileInput: any) {
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
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;
          this.isImageSaved = true;

          this.article.image_media_type = fileInput.target.files[0].type;
          const head = this.article.image_media_type.length + 13;
          this.article.image_data = e.target.result.substring(head, e.target.result.length);

        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
*/
}

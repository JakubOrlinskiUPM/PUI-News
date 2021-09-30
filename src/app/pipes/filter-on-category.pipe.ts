import { Pipe, PipeTransform } from '@angular/core';
import {Article} from "../models/article";

@Pipe({
  name: 'filterOnCategory'
})
export class FilterOnCategoryPipe implements PipeTransform {

  transform(articles: Article[], category: string): Article[] {
    if (category !== 'All') {
      return articles.filter(article => article.category === category);
    } else {
      return articles;
    }
  }

}

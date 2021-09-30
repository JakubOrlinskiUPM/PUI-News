import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { HeaderComponent } from './header/header.component';
import { ArticleListItemComponent } from './article-list-item/article-list-item.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { FilterOnCategoryPipe } from './pipes/filter-on-category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    ArticleViewComponent,
    ArticleFormComponent,
    ArticleListComponent,
    HeaderComponent,
    ArticleListItemComponent,
    FilterOnCategoryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

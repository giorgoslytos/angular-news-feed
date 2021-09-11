import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { NewsService } from './shared/news.service';
import { catchError } from 'rxjs/operators';

const maxPages = 16;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public username = 'Lara Croft';
  public news = [];
  public currentPage: number = 1;
  private subscriptions = new Subscription();

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.subscriptions.add(
      this.newsService
        .getNews(this.currentPage)
        .subscribe((data) => (this.news = data.articles))
    );
  }

  public changePage(newPage: number) {
    this.subscriptions.add(
      this.newsService
        .getNews(newPage)
        .subscribe((data) => (this.news = data.articles))
    );
  }

  public getNewsWithQuery(queryObj: any) {
    this.subscriptions.add(
      this.newsService
        .getNews(queryObj.page, queryObj.category, queryObj.query)
        .pipe(catchError((e) => of('Could not fetch news ', e)))
        .subscribe((data) => {
          this.news = data.articles;
        })
    );
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}

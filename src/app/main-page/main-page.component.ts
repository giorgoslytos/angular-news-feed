import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounce } from 'lodash';
import { NewsService } from '../shared/news.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  @Input() news: any;
  @Output() searchQuery = new EventEmitter<any>();
  public query: string = '';
  public categories = [
    'Business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];
  public selectedCategory = '';

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {}

  public categorySelected(newCategory: string) {
    this.selectedCategory = newCategory;
  }

  public debouncedSearch = debounce(this.search, 800);

  private search() {
    if (this.query) {
      this.searchQuery.emit({
        page: 1,
        category: this.selectedCategory,
        query: this.query,
      });
    }
  }
}

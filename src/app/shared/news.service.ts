import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://newsapi.org/v2/top-headlines';
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  public getNews(
    page: number,
    category?: string,
    query?: string
  ): Observable<any> {
    let params = new HttpParams();
    params = params.append('q', query ? query : 'a');
    params = params.append('apiKey', '09b2a48dc89f416caada3626ec05f9eb');
    params = params.append('page', page);
    params = params.append('pageSize', '6');
    if (category) {
      params = params.append('category', category);
    }
    return this.http.get<any>(API_URL, { params });
  }
}

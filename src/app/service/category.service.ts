import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  constructor(private http: HttpClient) {
  }

  getCategoryList(): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl);
  }

  cetegoryDelete(id: Number): Observable<any> {
    return this.http.delete(AppConstants.baseUrl + "/" + id);
  }

  findCategoryByName(nome: String): Observable<any> {
    return this.http.get(AppConstants.baseUrl + "/categoryByName/" + nome);

  }

  categorySave(category) : Observable<any> {
    return this.http.post<any>(AppConstants.baseUrl, category);
  }

  findCategoryById(id): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + "/" + id);
  }

  categoryUpdate(category) : Observable<any> {
    return this.http.put<any>(AppConstants.baseUrl + "/" + category.id, category);
  }
  
}
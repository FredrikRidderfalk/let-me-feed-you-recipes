import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseURL = 'http://localhost:8080'; // URL to web api

  constructor(private http: HttpClient) {}

  getRecipeViews(): Observable<any> {
    return this.http.get(`${this.baseURL}/recipe-views`);
  }

  addRecipeView(recipeName: string): Observable<any> {
    return this.http.post(`${this.baseURL}/add-recipe-view`, { recipeName });
  }
}

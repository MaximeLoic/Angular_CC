import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/quiz/category/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: Category[] = [];
  constructor(private http: HttpClient) {}

  getCategories() {
    this.http.get<Category[]>('http://localhost:3000/categories').subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: console.error,
    });
  }
}

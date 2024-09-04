import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/quiz/category/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: Category[] = [];
  constructor(private http: HttpClient) {}

  getCategories(search?: string) {
    this.http.get<Category[]>('http://localhost:3000/categories').subscribe({
      next: (categories) => {
        if (search) {
          this.categories = categories.filter((category) =>
            category.name.toLowerCase().includes(search.toLowerCase())
          );
        } else {
          this.categories = categories;
        }
      },
      error: console.error,
    });
  }

  getCategory(categoryId: number) {
    return this.http.get<Category>(
      `http://localhost:3000/categories/${categoryId}`
    );
  }
}

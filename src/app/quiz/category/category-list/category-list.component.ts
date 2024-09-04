import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/quiz/category/category.model';
import { CategoryService } from 'src/app/quiz/category/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  search?: string;
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.categoryService.getCategories();
  }

  get categories(): Category[] {
    return this.categoryService.categories;
  }

  handleSearch() {
    this.categoryService.getCategories(this.search);
  }

  goToQuiz(categoryId: number) {
    this.router.navigate(['/quiz', categoryId]);
  }
}

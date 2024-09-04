import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../shared/services/quiz.service';
import { CategoryService } from 'src/app/quiz/category/category.service';
import { Category } from 'src/app/quiz/category/category.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  isQuizFinished = this.quizService.isQuizFinished;
  categoryId: number = -1;
  category: Category | undefined;

  constructor(
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoryId = parseInt(params['categoryId']);
      this.categoryService.getCategory(this.categoryId).subscribe({
        next: (category) => {
          this.category = category;
        },
      });
    });
  }

  goToResultPage() {
    this.router.navigate(['/result']);
  }
}

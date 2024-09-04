import { Component, Input, OnInit } from '@angular/core';
import { QuizService } from '../../shared/services/quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input({ required: true }) categoryId!: number;
  quizContent: any[] = this.quizService.quizContent;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getQuizContent(this.categoryId);
  }
}

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { QuizService } from '../../shared/services/quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnChanges {
  @Input({ required: true }) categoryId!: number;
  constructor(private quizService: QuizService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.quizService.getQuizContent(this.categoryId);
  }

  get quizContent() {
    return this.quizService.quizContent;
  }
}

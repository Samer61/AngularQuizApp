import { Component, OnInit } from "@angular/core";
import { Question } from "src/app/models/question";
import { Option } from "src/app/models/option";
import * as data from "../../data.json";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.scss"],
})
export class QuestionsComponent implements OnInit {
  questions: Question[] = (data as any).default;
  currentQuestion: Question;
  currentIndex: number = 0;
  correctAnswers: number = 0;
  showExplanation: boolean = false;
  hasAnsweredCorrectly: boolean;
  quizOver: boolean = false;

  constructor() {}

  ngOnInit() {
    this.currentQuestion = this.questions[this.currentIndex];
  }

  answeredQuestion(option: Option) {
    this.showExplanation = true;
    this.currentIndex++;
    if (this.currentQuestion.rightAnswer._id === option._id) {
      this.hasAnsweredCorrectly = true;
      this.correctAnswers++;
    } else {
      this.hasAnsweredCorrectly = false;
    }
  }

  nextQuestion() {
    this.showExplanation = false;
    if (this.currentIndex >= this.questions.length) {
      this.quizOver = true;
    } else {
      this.currentQuestion = this.questions[this.currentIndex];
    }
  }
}

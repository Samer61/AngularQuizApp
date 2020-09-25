import { Component, Input, OnInit } from "@angular/core";
import { Question } from "src/app/models/question";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.scss"],
})
export class ResultComponent implements OnInit {
  @Input() questions: Question[];
  @Input() correctAnswers: number;
  finalPercentage: number;

  constructor() {}

  ngOnInit() {
    console.log(this.questions);
    console.log(this.correctAnswers);
    this.finalPercentage = (this.correctAnswers * 100) / this.questions.length;
  }
}

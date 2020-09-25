import { Option } from "./option";

export class Question {
  public _id: number;
  public question: string;
  public questionImg: string;
  public options: Option[] = [];
  public rightAnswer: Option;
  public explanation: string;
  public answerImage: string;
}

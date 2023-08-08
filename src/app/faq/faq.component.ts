import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit, OnChanges {
  @Input() public faqQuestionModel!: any;
  public question!: string;
  public chats: Array<any> = new Array();
  constructor(public apiService: ApiService) { }
  ngOnChanges(simpleChange: SimpleChanges) {
    if(simpleChange && simpleChange['faqQuestionModel'] && simpleChange['faqQuestionModel'].currentValue) {
      this.faqQuestion(simpleChange['faqQuestionModel'].currentValue);
    }
  }
  faqQuestion(question: any) {
    const chatQuestionModel = {
      sender: 'user',
      data: {
        answer: question.question
      }
    }
    this.chats.push(chatQuestionModel);
    setTimeout(() => {
      const chatAnswerModel = {
        sender: 'bot',
        data: {
          answer: question.answer
        }
      }
      this.chats.push(chatAnswerModel);
    }, 100);
  }
  ngOnInit() {
  }
  sendMessage() {
    const model = {
      question: this.question,
      chat_history: []
    }
    const chatModel = {
      sender: 'user',
      data: {
        answer: this.question
      }
    }
    this.chats.push(chatModel);
    this.question = '';
    this.apiService.sendMessage(model).subscribe((res: Array<any>) => {
      res = res.map(el => {
        return  {
          sender: 'bot',
          ...el
        }
      })
      this.chats.push(...res);
    })
  }
  onClear() {
    this.chats = new Array();
  }
}

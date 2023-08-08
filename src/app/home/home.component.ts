import { Component, OnInit, ViewChild } from '@angular/core';
import { FaqComponent } from '../faq/faq.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(FaqComponent) faq!: FaqComponent;
  public selectedTabQuestion: any;
  public tabs = [
    {
      heading: 'English Language',
      questions: [
        {
          question: 'How do I book an exam?',
          answer: 'Test Answer'
        },
        {
          question: 'How do I upload a digital exam?',
          answer: 'Test Answer'
        },
        {
          question: 'Where can I download the latest syllabuses?',
          answer: 'Test Answer'
        },
        {
          question: `What's the latest Trinity newa?`,
          answer: 'Test Answer'
        }
      ]
    },
    {
      heading: 'Music',
      questions: [
        {
          question: 'How do I book an exam?',
          answer: 'Test Answer'
        },
        {
          question: 'How do I upload a digital exam?',
          answer: 'Test Answer'
        },
        {
          question: 'Where can I download the latest syllabuses?',
          answer: 'Test Answer'
        },
        {
          question: `What's the latest Trinity newa?`,
          answer: 'Test Answer'
        },
      ]
    },
    {
      heading: 'Drama',
      questions: [
        {
          question: 'How do I book an exam?',
          answer: 'Test Answer'
        },
        {
          question: ' How do I upload a digital exam?',
          answer: 'Test Answer'
        },
        {
          question: 'Where can I download the latest syllabuses?',
          answer: 'Test Answer'
        },
        {
          question: `What's the latest Trinity newa?`,
          answer: 'Test Answer'
        },
      ]
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}

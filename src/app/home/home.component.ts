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
  public selectedIndex = 0;
  public tabs = [
    {
      heading: 'English Language',
      url: 'https://api.writesonic.com/v1/botsonic/botsonic/generate/2d84fdf8-23cd-4df1-b917-243463d4823f',
      token: '35c669e2-6d72-4880-9ae1-0ec1bae119e8',
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
      url: 'https://api.writesonic.com/v1/botsonic/botsonic/generate/5d33e64d-fb02-4343-8caa-98e40632b243',
      token: 'f8ca0826-c17c-4df4-9061-db9f6713dc4d',
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
      url: 'https://api.writesonic.com/v1/botsonic/botsonic/generate/ef46739d-7279-4246-ba82-f99ea90d5f58',
      token: '3ffd4586-5e49-4536-9e23-4f11a49df487',
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

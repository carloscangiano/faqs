import { Component, OnInit } from '@angular/core';
import { FaqsService } from '../../service/faqs.service';
import { faqs } from 'src/app/models/faqs';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
  providers: [FaqsService]
})
export class FaqsComponent implements OnInit {

  constructor(private faqsService : FaqsService) {}  

  ngOnInit() {
    this.getFaqs();
  }
  
  getFaqs() {
    this.faqsService.getAllFaqs()
      .subscribe(res => {
        this.faqsService.listFaqs = res as faqs[];
        console.log(res);
      });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faqs } from '../models/faqs';

@Injectable({
  providedIn: 'root'
})

export class FaqsService {      
  listFaqs: faqs[] = [];
  readonly URL_API = 'https://my-json-server.typicode.com/carloscangiano/faqs-db/db'
  constructor(private http: HttpClient) { }
  
  getAllFaqs() {
    return this.http.get<faqs[]>(this.URL_API);
  }
}

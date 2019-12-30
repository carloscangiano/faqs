import { identifierModuleUrl } from '@angular/compiler';

export class faqs {
    _id: number;
    question: string;
    answer: string;    
    
    constructor(_id: number, question: string, answer: string) {
        this._id = _id;
        this.question = question;
        this.answer = answer;
    }
}

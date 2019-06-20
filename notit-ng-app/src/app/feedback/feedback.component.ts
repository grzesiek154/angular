import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  model:FeedbackViewModel ={
    name:"",
    email:"",
    feedback:""
};

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    let url = "http://localhost:8882/api/feedback";
    this.apiService.postFeedback(this.model).subscribe(
      res => {
        location.reload(); // przeladowywujemy strone
      },
      err => {
        alert("An error has occurred while sending feedback");

    }
    );
  }

  sendFeedback(): void {
    alert(this.model.name);
  }
}

export interface FeedbackViewModel {
  name:string;
  email:string;
  feedback:string;

}

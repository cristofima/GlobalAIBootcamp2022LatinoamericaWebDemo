import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sms-spam-prediction',
  templateUrl: './sms-spam-prediction.component.html',
  styleUrls: []
})
export class SmsSpamPredictionComponent implements OnInit {

  predictions: { text: string, result: string, probability: number }[] = [];

  textToAnalyze: string = "";
  displayDialog = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.textToAnalyze = "";
    this.displayDialog = true;
  }

  analizeText() {
    this.displayDialog = false;
    this.apiService.analizeSMS(this.textToAnalyze.trim()).subscribe(r => {
      this.predictions.push(r);
      this.textToAnalyze = "";
    });
  }

}

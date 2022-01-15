import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: []
})
export class SentimentAnalysisComponent implements OnInit {

  predictions: { text: string, sentiment: string, probability: number }[] = [];

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
    this.apiService.analizeTextSentiment(this.textToAnalyze.trim()).subscribe(r => {
      this.predictions.push(r);
      this.textToAnalyze = "";
    });
  }

}

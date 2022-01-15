import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "https://localhost:7013/api";

  constructor(private http: HttpClient) { }

  public analizeTextSentiment(text: string) {
    return this.http.post<{ text: string, sentiment: string, probability: number }>(`${this.baseUrl}/SentimentAnalysis/Predict`, { message: text });
  }

  public analizeSMS(text: string) {
    return this.http.post<{ text: string, result: string, probability: number }>(`${this.baseUrl}/SMSSpamDetection/Predict`, { message: text });
  }
}

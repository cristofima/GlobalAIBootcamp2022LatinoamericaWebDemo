import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentimentAnalysisComponent } from './components/sentiment-analysis/sentiment-analysis.component';
import { SmsSpamPredictionComponent } from './components/sms-spam-prediction/sms-spam-prediction.component';

const routes: Routes = [
  {
    path: 'sentiment-analysis',
    component: SentimentAnalysisComponent
  },
  {
    path: 'sms-spam-detection',
    component: SmsSpamPredictionComponent
  },
  {
    path: '',
    redirectTo: 'sentiment-analysis',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

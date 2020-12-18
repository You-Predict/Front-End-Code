import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppsPredictionComponent } from './content/apps-prediction/apps-prediction.component';
import { AppsSearchComponent } from './content/apps-search/apps-search.component';

const routes: Routes = [
  { component: AppsSearchComponent, path: ''},
  { component: AppsSearchComponent, path: 'search'},
  { component: AppsPredictionComponent, path: 'predict'},
  { component: AppsSearchComponent, path: '**'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

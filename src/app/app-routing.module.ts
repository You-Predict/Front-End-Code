import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { AppsPredictionComponent } from './content/apps-prediction/apps-prediction.component';
import { AppsSearchComponent } from './content/apps-search/apps-search.component';
import { ShowAppsComponent } from './content/show-apps/show-apps.component';

const routes: Routes = [
  { component: AppsSearchComponent, path: ''},
  { component: AppsSearchComponent, path: 'search'},
  { component: AppsPredictionComponent, path: 'getRate'},
  { component: AppsSearchComponent, path: '**'},
  { component: ShowAppsComponent, path: 'showApps'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

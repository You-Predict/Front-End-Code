import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContentComponent } from './content/content.component';
import { AppsSearchComponent } from './content/apps-search/apps-search.component';
import { AppsPredictionComponent } from './content/apps-prediction/apps-prediction.component';
import { ShowAppsComponent } from './content/show-apps/show-apps.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    AppsSearchComponent,
    AppsPredictionComponent,
    ShowAppsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'getRate', component: AppsPredictionComponent },
      { path: 'search', component: AppsSearchComponent},
      { path: 'showApps', component: ShowAppsComponent} 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingsComponent } from './topheadings/topheadings.component';

const routes: Routes = [
  { path: '', component: TopheadingsComponent },
  { path: 'technews', component: TechnewsComponent },
  { path: 'businessnews', component: BusinessnewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

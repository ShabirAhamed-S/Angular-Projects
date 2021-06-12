import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { AddComponent } from './table/add/add.component';
import { TableComponent } from './table/table.component'
import { UpdateComponent } from './table/update/update.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'course', component:CourseComponent},
  {path:'joinnow', component:JoinnowComponent},
  {path:'about', component:AboutComponent},
  {path:'table', component: TableComponent},
  {path:'add', component: AddComponent},
  {path:'update/:id', component: UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

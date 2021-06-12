import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { AboutComponent } from './about/about.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { TableComponent } from './table/table.component';
import { UpdateComponent } from './table/update/update.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Ng2OrderModule} from 'ng2-order-pipe'
import {Ng2SearchPipeModule} from 'ng2-search-filter'
import { Ng2SmartTableModule } from 'ng2-smart-table';

import {NgxPaginationModule} from 'ngx-pagination';

import { AddComponent } from './table/add/add.component';
import { ServiceService } from './service.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    AboutComponent,
    JoinnowComponent,
    TableComponent,
    UpdateComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2SmartTableModule,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

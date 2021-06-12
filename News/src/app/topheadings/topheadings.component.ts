import { Component, OnInit } from '@angular/core';

import { ApiserviceService } from '../service/apiservice.service'

@Component({
  selector: 'app-topheadings',
  templateUrl: './topheadings.component.html',
  styleUrls: ['./topheadings.component.css']
})
export class TopheadingsComponent implements OnInit {

  topHeadingDisplay: any = []
  p: number = 1;

  constructor(private _service: ApiserviceService) { }

  ngOnInit(): void {
    this._service.topHeadings().subscribe(result => {
      console.log(result);
      this.topHeadingDisplay = result.articles;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {

  businessNewsDisplay: any = []
  constructor(private _service: ApiserviceService) { }

  ngOnInit(): void {
    this._service.techNews().subscribe(result => {
      console.log(result);
      this.businessNewsDisplay = result.articles;

    })
  }

}

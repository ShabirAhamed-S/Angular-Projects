import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  techNewsDisplay: any = []
  constructor(private _service: ApiserviceService) { }

  ngOnInit(): void {
    this._service.techNews().subscribe(result => {
      console.log(result);
      this.techNewsDisplay = result.articles;

    })
  }

}

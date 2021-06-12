import { Component } from '@angular/core';
import { ApiserviceService } from './service/apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular News';
  topic: any;

  topHeadingDisplay: any = []
  constructor(private _service: ApiserviceService) { }

  ngOnInit(): void {
    this._service.topHeadings().subscribe(result => {
      console.log(result);
      this.topHeadingDisplay = result.articles;
    })
  }

  Search(){
  if (this.topic == '') {
      this.ngOnInit();
    }
    else {
      this.topic= this._service.search(this.topic)
    }
    console.log("sj",this.topic)
  }
}

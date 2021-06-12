import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  link(e:any)
  {
    for( let c of this.course)
    if(c.id==e)
    {
      
    }
  }

  course =[
    {
      'id':1, 'name':'Learn JS-TS','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'image':'../../assets/js-ts.jfif', 'link':'https://youtube.com/playlist?list=PLduqS5yV0PjjYPKU8W4_UA-yqUSFAZeBM'
    },
    {
      'id':2, 'name':'Learn NodeJS','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/nodejs.jfif', 'link': 'https://youtu.be/fBNz5xF-Kx4'
    },
    {
      'id':3, 'name':'Learn Angular/Cli','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/angular.jfif', 'link': 'https://youtu.be/3dHNOWTI7H8'
    },
    {
      'id':4, 'name':'Learn ReactJs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/reactjs.jfif', 'link': 'https://youtu.be/w7ejDZ8SWv8'
    }
  ]
}

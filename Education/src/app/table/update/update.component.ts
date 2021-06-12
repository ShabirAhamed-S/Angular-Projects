import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Users } from '../../model/users';
import { UserFetch } from '../../model/user-fetch';
import { ServiceService } from '../../service.service'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @Output() updated: EventEmitter<any> = new EventEmitter()

  val: any;
  users: Users[] = [];
  userF: UserFetch[] = [];
  employees: Users[] = [];

  settings = {
    selectMode: 'multi',
    columns: {
      id: {
        title: 'ID'
      },
      username:
      {
        title: 'UserName'
      },
      name: {
        title: 'Name'
      },
      email: {
        title: 'Email Id'
      },
      phone: {
        title: 'Phone Number'
      },
      website: {
        title: 'Website'
      }
    }
  };

  constructor(public route: ActivatedRoute, public router: Router, public ss: ServiceService) { }

  ngOnInit(): void {
    let sub = this.route.params.subscribe(params => {
      this.val = params['id'];
    })

    this.ss.getUsers().subscribe((response:Users[]) => {
      this.users = response;
      this.userF = response;
    },
      err => console.log(err)
    )

    console.log("id:", this.val)
    this.ss.getUpdateUser(this.val).subscribe(data => {
      this.userF = data
    })

    // this.updated.emit(sub)
  }

  update() {
    // this.ss.updateUser(this.userF).subscribe(data => {
    //   this.userF.push(data)
    // })
    this.getUsers()
    this.router.navigate(['table'])
  }

  getUsers() {
    this.ss.getUsers().subscribe(data => {
      this.users = data;
    })
  }

}

import { Component, OnInit } from '@angular/core';

import { UserFetch } from 'src/app/model/user-fetch';
import { Users } from 'src/app/model/users';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  users: Users[] = []
  userF: UserFetch[] = [];

  constructor(public ss:ServiceService) { }

  ngOnInit(): void {
    this.ss.getUsers().subscribe((response) => {
      this.users = response;
    })
    this.userF;
    console.log(this.users, this.userF)
  }

  addUser() {

  }
}

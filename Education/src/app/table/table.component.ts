import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserFetch } from '../model/user-fetch';
import { Users } from '../model/users'
import { ServiceService } from '../service.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  users: Users[] = [];

  /* Table Tag */

  user: UserFetch[] = []
  firstName: any;
  key: string = 'id'
  reverse: boolean = false
  p: number = 1;



  constructor(public ss: ServiceService, private router: Router) { }

  ngOnInit() {
    this.ss.getUsers().subscribe((response) => {
      this.users = response;
    },
      err => console.log(err))
  }

  /*  ng2-smart-table  */

  // employees: Users[] = [];

  // settings = {
  //   selectMode: 'multi',
  //   columns: {
  //     id: {
  //       title: 'ID'
  //     },
  //     username:
  //     {
  //       title: 'UserName'
  //     },
  //     name: {
  //       title: 'Name'
  //     },
  //     email: {
  //       title: 'Email Id'
  //     },
  //     phone: {
  //       title: 'Phone Number'
  //     },
  //     website: {
  //       title: 'Website'
  //     }
  //   }
  // };

  // ngOnInit() {
  //   this.ss.getUsers().subscribe((data: Users[]) => {
  //     this.employees = data;
  //   },
  //   err => console.log(err));
  // }

  /* Table Tag*/

  Search() {
    if (this.firstName == '') {
      this.ngOnInit();
    }
    else {
      this.users = this.users.filter((res) => {
        return res.name.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      })
    }
  }

  sort(key: any) {
    this.key = key
    this.reverse = !this.reverse
  }

  deleteRow(val: any) {
    if (confirm("Are you sure to delete?")) {
      this.ss.deleteUsers(val).subscribe(res => { }, err => console.log(err))
      this.ss.getUsers().subscribe((response) => {
        this.users = response;
      },
        err => console.log(err)
      )
      //   // Remove From UI
      // this.users = this.users.filter(t => t.id !== val);
      // // Remove from server
      // this.ss.deleteUsers(val).subscribe();
      //   this.deleteTodo.emit(val);
      // }
    }
  }

  update(id: any) {
    this.router.navigate(['/update', id]);
  }

  add() {
    this.router.navigate(['/add']);
  }

}
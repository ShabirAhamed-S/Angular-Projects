import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { Users } from './model/users';
import { UserFetch } from './model/user-fetch';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  baseUrl: string = 'http://localhost:3000/api'
  
  url: string = 'http://localhost:3000/Users';

  urls:string ='https://jsonplaceholder.typicode.com/users'
  
  constructor(private http: HttpClient) { }

  // Both ng2-smart-table and Table tag

  getUsers() {
    return this.http.get<Users[]>(this.url)
  }

  // Table Tag

  deleteUsers(id: string): Observable<any> {
    const url = `${this.url}/${id}`
    return this.http.delete<Users>(url, httpOptions)
  }

  getUpdateUser(id: string): Observable<any> {
    const url = `${this.url}/${id}`
    return this.http.get<Users>(url, httpOptions)
  }

  updateUser(user: Users): Observable<any> {
    const url = `${this.url}/:${user.id}`
    return this.http.put<Users>(url, user, httpOptions).pipe(
      map(() => user)
      );
  }

  // Join Now Loginpage

  login(data: any): Observable<any> {
    console.log('im server')
    return this.http.post(`{baseUrl}/auth_login`, data)
  }
}

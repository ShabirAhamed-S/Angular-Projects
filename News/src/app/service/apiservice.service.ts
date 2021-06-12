import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }
  apiUrl: string ='https://newsapi.org/v2/top-headlines?country=in&apiKey=e500f2354f8845479421a5e8f2919c5f'

  techApi:string ='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=e500f2354f8845479421a5e8f2919c5f'

  businessApi: string='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e500f2354f8845479421a5e8f2919c5f'

  topHeadings(): Observable<any>{
    return this.http.get(this.apiUrl)
  }

  techNews(): Observable<any>{
    return this.http.get(this.techApi)
  }

  search(topic:any){
    return this.http.get(`${this.apiUrl}/${topic}`)
  }
}

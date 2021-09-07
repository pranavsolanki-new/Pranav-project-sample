import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HackIdeaService {

  constructor(private httpService: HttpClient) { }

  public jsondata ():Observable<any> {
    return this.httpService.get('http://localhost:3000/Projects');
  }

  public addTask(newtask:any) :Observable<any> {
    debugger
    return this.httpService.post('http://localhost:3000/Projects',newtask,{
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    });
  }
}

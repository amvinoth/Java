import { Component } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {HttpClient, HttpErrorResponse,HttpParams} from '@angular/common/http';

import 'rxjs/add/operator/retry';

import{Movie} from './movie';
class Student1{
   name:string;
   id:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data:any;
  constructor( private http:HttpClient) { 
    this.httpRequestWithParameter();
    // this.data=this.sampleHttpRequest();
    // this.display();
  }

  sampleHttpRequest():any{
    console.log("in service part");
    return this.http.get('http://localhost:8060/RESTExample/student/allStudent')
    .retry(2)
    .subscribe(
      data => {
        movies => movies as Movie[];
      },
      (err:HttpErrorResponse) => {
        if (err.error instanceof Error) {
          
          console.log('An error occurred:', err.error.message);
        } else {
         
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    );
    
    
  }
  display(){
    if(this.data!=null){
      console.log(this.data);

    }
  }
  display1(){
    if(this.data!=null){
      console.log(this.data);

    }
  }
  display2(){
    if(this.data!=null){
      console.log(this.data);

    }
  }
  
  haiDisplay(){
	  console.log("Hai");
  }
  httpRequestWithParameter():any{
    console.log("in service part 2 with params");
    return this.http.get('http://localhost:8060/RESTExample/student', {
      params: new HttpParams().set('id', '3'),
    })
    .subscribe(
      data => {
        console.log("without http response error");
        params => console.log(params);
      },
      (err:HttpErrorResponse) => {
        if (err.error instanceof Error) {  
          console.log('An error occurred+++++', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    );
    
  }
}

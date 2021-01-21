import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hashing generator';
  url='/isLoggedIn'
  isLoggedInDataType:boolean=false
  constructor(private http: HttpClient){
    this.isLoggedInDataType=this.isLoggedIn()
  }

  isLoggedIn(){
     this.http.get(this.url).pipe(catchError(this.handleError)).subscribe((data)=>{
       console.log(Object.values(data)[0] + "from app component")
      return Object.values(data)[0];
    })
     return false;
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}

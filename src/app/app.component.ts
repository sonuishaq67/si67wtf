import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Hashing generator';
  url='/isLoggedIn'
  isLoggedInDataType:boolean=false
  constructor(private http: HttpClient, private route: Router,@Inject(DOCUMENT) private document: Document){
    // this.isLoggedIn()
  }
  ngOnInit(): void {
    this.isLoggedIn();
  }

  isLoggedIn() {
    this.http.get(this.url).pipe(catchError(this.handleError)).subscribe((data) => {
      console.log(Object.values(data)[0] + "from app component")
      this.isLoggedInDataType = Object.values(data)[0];
      this.redirectIfLoggedIn()
    })
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
  redirectIfLoggedIn() {
    if (this.isLoggedInDataType) {
      this.route.navigate(['/home'])
    }
  }
  logoutUser(){
    this.document.location.href = '/logout';
  }
}

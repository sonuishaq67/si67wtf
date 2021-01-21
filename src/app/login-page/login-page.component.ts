import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private http: HttpClient, private route: Router) { }
  url = '/isLoggedIn'
  isLoggedInDataType: boolean = false
  ngOnInit(): void {
    this.isLoggedInDataType = this.isLoggedIn()
    this.redirectIfLoggedIn()
  }
  goToLogin() {
    this.document.location.href = '/login';
  }
  isLoggedIn() {
    this.http.get(this.url).pipe(catchError(this.handleError)).subscribe((data) => {
      console.log(Object.values(data)[0] + "from login component")
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
  redirectIfLoggedIn() {
    if (this.isLoggedInDataType) {
      this.route.navigate(['/home'])
    }
  }

}

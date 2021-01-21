import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }
  ngOnInit(): void {
  }
  goToLogin() {
    this.document.location.href = '/login';
  }
}

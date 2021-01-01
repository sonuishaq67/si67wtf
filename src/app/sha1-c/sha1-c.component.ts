import { Component, OnInit } from '@angular/core';
import * as crypto from "crypto-js";
@Component({
  selector: 'app-sha1-c',
  templateUrl: './sha1-c.component.html',
  styleUrls: ['./sha1-c.component.scss']
})
export class Sha1CComponent implements OnInit {

  constructor() { }
  str = '';
  ngOnInit(): void {
  }
  sha1gen(): string {
    const str = `${crypto.SHA1(this.str)}`;
    return str;
  }
  sha224gen(): string {
    const str = `${crypto.SHA224(this.str)}`
    return str;
  }
}

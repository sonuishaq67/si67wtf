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
  sha256gen(): string {
    const str = `${crypto.SHA256(this.str)}`
    return str;
  }
  sha3gen(): string {
    const str = `${crypto.SHA3(this.str)}`
    return str;
  }
  sha384gen(): string {
    const str = `${crypto.SHA384(this.str)}`
    return str;
  }
  sha512gen(): string {
    const str = `${crypto.SHA512(this.str)}`
    return str;
  }
  listOfHashings = ['sha1', 'sha224', 'sha256', 'sha3', 'sha384', 'sha512'];
  listOfHashingFunctions = [this.sha1gen(), this.sha224gen(), this.sha256gen(), this.sha3gen(), this.sha384gen(), this.sha512gen()];

}

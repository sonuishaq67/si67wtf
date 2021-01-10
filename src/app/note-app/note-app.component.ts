import { Component, OnInit } from '@angular/core';
import { NoteApp } from './note-app';

@Component({
  selector: 'app-note-app',
  templateUrl: './note-app.component.html',
  styleUrls: ['./note-app.component.scss']
})
export class NoteAppComponent implements OnInit {
  allNotes: NoteApp[] = []
  i: number = 0
  currNotes: NoteApp = { title: '', description: '' }
  constructor() { }
  toParse: any
  ngOnInit(): void {
    this.toParse = localStorage.getItem("data") ?? [];
    this.getNotes()
  }

  saveNotes() {
    this.allNotes[this.i++] = this.currNotes;
    this.clear()
    console.log(this.allNotes)
    localStorage.setItem("data", JSON.stringify(this.allNotes))
  }
  cancel() {
    this.clear();
  }
  clear() {
    this.currNotes = { title: '', description: '' };
  }
  async delete() {
    await localStorage.clear()
    this.allNotes = []
    this.i = 0
  }
  getNotes() {
    this.toParse = localStorage.getItem("data") ?? [];
    this.allNotes = JSON.parse(this.toParse);
    this.i = this.allNotes.length
  }
}

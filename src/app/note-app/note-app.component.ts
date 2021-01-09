import { Component, OnInit } from '@angular/core';
import { NoteApp } from './note-app';

@Component({
  selector: 'app-note-app',
  templateUrl: './note-app.component.html',
  styleUrls: ['./note-app.component.scss']
})
export class NoteAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  allNotes: NoteApp[] = []
  currNotes: NoteApp = { title: '', description: '' }
  saveNotes(currNotes: NoteApp) {
    this.allNotes.push(currNotes)
  }
  cancel() {
    this.clear();
  }
  clear() {
    this.currNotes = { title: '', description: '' };
  }
}

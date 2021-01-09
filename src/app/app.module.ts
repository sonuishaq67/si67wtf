import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { Sha1CComponent } from './sha1-c/sha1-c.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NoteAppComponent } from './note-app/note-app.component';

@NgModule({
  declarations: [
    AppComponent,
    Sha1CComponent,
    WelcomePageComponent,
    ErrorPageComponent,
    NoteAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sha1CComponent } from './sha1-c/sha1-c.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ErrorPageComponent } from './error-page/error-page.component'
import { NoteAppComponent } from './note-app/note-app.component';
import { LoginPageComponent } from './login-page/login-page.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'toLogin' },
  { path: 'toLogin', component: LoginPageComponent },
  { path: 'home', component: WelcomePageComponent },
  { path: 'sha', component: Sha1CComponent },
  { path: 'note', component: NoteAppComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

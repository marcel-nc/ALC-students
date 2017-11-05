import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StudentsService} from './students.service'
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

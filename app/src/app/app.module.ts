import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TrackerComponent } from './tracker/tracker.component';
import { NgProgressModule } from 'ngx-progressbar';


@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TodoListComponent,
    TrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    NgProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

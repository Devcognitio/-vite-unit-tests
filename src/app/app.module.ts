import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactListComponent } from 'src/components/contact-list/contact-list.component';
import { ContactService } from 'src/components/contact-list/contact.service';
import { TodoListComponent } from 'src/components/todo-list/todo-list.component';
import { TodoService } from 'src/components/todo-list/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ ContactService, TodoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

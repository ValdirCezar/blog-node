import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/template/home/home.component';
import { TodoReadAllComponent } from './components/crud/todo-read-all/todo-read-all.component';
import { TodoTableComponent } from './components/crud/todo-table/todo-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoReadAllComponent,
    TodoTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoFormComponent } from './todo-form/todo-form.component';
import {TodosFilterPipe} from './shared/todos-filter.pipe'
import {FormsModule} from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		TodosComponent,
		TodoFormComponent,
		TodosFilterPipe
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

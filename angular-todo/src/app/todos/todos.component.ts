import { Component, OnInit } from '@angular/core';
import { TodosService } from '../shared/todos.service';
import { logging } from 'protractor';
import { delay } from 'rxjs/operators';

@Component({
	selector: 'app-todos',
	templateUrl: './todos.component.html',
	styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

	private loading: boolean = true
	private searchString: string = ''

	constructor(public todosService: TodosService) { }

	ngOnInit() {
		this.todosService.fetchTodos()
			.pipe(delay(600))
			.subscribe(() => {
				this.loading = false
			})
	}

	onChange(id: number) {
		this.todosService.onToggle(id)
	}

	removeTodo(id: number) {
		this.todosService.removeTodo(id)
	}

}

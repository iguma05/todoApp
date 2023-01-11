import React from 'react';
import { TodoListItem } from './todoListItem';

export function TodoList({ todos, onDeleted }) {
	const elements = todos.map((item) => {
		return (
			<li key={item.id}>
				<TodoListItem text={item.text} onDeleted={() => onDeleted(item.id)} />
			</li>
		);

		//
	});
	return <ul className='todo-list'>{elements}</ul>;
}

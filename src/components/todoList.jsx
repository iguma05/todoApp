import React from 'react';
import { TodoListItem } from './todoListItem';

export function TodoList({ todos, onDeleted }) {
	const elements = todos.map((item) => {
		return (
			<TodoListItem
				key={item.id}
				text={item.text}
				onDeleted={() => onDeleted(item.id)}
			/>
		);
	});
	return <ul className='todo-list'>{elements}</ul>;
}

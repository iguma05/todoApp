import React from 'react';
import { TodoListItem } from './todoListItem';

export function TodoList({ todos, onDone, onDeleted }) {
	const elements = todos.map((item) => {
		return (
			<TodoListItem
				key={item.id}
				done={item.done}
				text={item.text}
				onDone={() => onDone(item.id)}
				onDeleted={() => onDeleted(item.id)}
			/>
		);
	});
	return <ul className='todo-list'>{elements}</ul>;
}

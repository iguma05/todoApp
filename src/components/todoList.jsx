import React from 'react';
import { TodoListItem } from './todoListItem';

export function TodoList({
	todos,
	onDone,
	onDeleted,
	saveChanges,
	editItem,
	btnFilter,
}) {
	let filteredToDo;
	if (btnFilter === 1) {
		filteredToDo = [...todos];
	} else if (btnFilter === 2) {
		filteredToDo = todos.filter((todo) => !todo.done);
	} else if (btnFilter === 3) {
		filteredToDo = todos.filter((todo) => todo.done);
	}

	const elements = filteredToDo
		.map((todo) => {
			const { id, done, text, edit } = todo;
			return (
				<TodoListItem
					key={id}
					done={done}
					text={text}
					edit={edit}
					onDone={() => onDone(id)}
					onDeleted={() => onDeleted(id)}
					editItem={() => editItem(id)}
					saveChanges={(event) => saveChanges(id, event)}
				/>
			);
		})
		.reverse();
	return <ul className='todo-list'>{elements}</ul>;
}

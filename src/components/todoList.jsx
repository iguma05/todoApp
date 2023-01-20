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
		filteredToDo = todos.filter((el) => !el.done);
	} else if (btnFilter === 3) {
		filteredToDo = todos.filter((el) => el.done);
	}

	const elements = filteredToDo.map((item) => {
		const { id, done, text, edit } = item;
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
	});
	return <ul className='todo-list'>{elements}</ul>;
}

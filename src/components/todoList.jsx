import { TodoListItem } from './todoListItem';

export function TodoList({ todos }) {
	// console.log(todos);
	const elements = todos.map((item) => {
		return (
			<li key={item.id}>
				<TodoListItem text={item.text} />
			</li>
		);

		//
	});
	return <ul className='todo-list'>{elements}</ul>;
}

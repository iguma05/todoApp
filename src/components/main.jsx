import { Footer } from './footer';
import { TodoList } from './todoList';

export function Main() {
	return (
		<div className='main'>
			<TodoList />
			<Footer />
		</div>
	);
}

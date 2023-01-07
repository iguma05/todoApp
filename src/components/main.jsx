import { Footer } from './footer';
import { TodoList } from './todoList';

export function Main({content}) {
	// console.log(props);
	return (
		<section className='main'>
			<TodoList {...content} />
			<Footer />
		</section>
	);
}

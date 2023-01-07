import { Footer } from './footer';
import { TodoList } from './todoList';

export function Main(props) {
	
	return (
		<section className='main'>
			<TodoList text={props} />
			<Footer />
		</section>
	);
}

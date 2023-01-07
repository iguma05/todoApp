import { View } from './view';

export function TodoList() {
	return (
		<ul className='todo-list'>
			<li className='completed'>
				<View />
			</li>
		</ul>
	);
}

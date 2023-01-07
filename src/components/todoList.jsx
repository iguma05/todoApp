import { View } from './view';

export function TodoList(props) {
	console.log(props);
	return (
		<ul className='todo-list'>
			{Object.values(props).map((item) => {
				// <li className='completed'>
				return (
					<li>
						<View {...item} />
					</li>
				);
			})}
		</ul>
	);
}

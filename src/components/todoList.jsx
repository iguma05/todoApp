import { View } from './view';

export function TodoList({ text }) {
	return (
		<ul className='todo-list'>
			{text.props.map((item) => {
				// <li className='completed'>
				return (
					<li>
						<View text={item} />
					</li>
				);
			})}
		</ul>
	);
}

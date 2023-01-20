import React from 'react';
import { ButtonFilter } from './buttonFilter';

export class Footer extends React.Component {
	render() {
		const { counter, clearCompleted, filteredTodo, buttons, onClicked } =
			this.props;

		const elements = buttons.map((button) => {
			const { id, value, clicked } = button;
			return (
				<ButtonFilter
					key={id}
					value={value}
					clicked={clicked}
					onClicked={() => onClicked(id)}
					filteredTodo={() => filteredTodo(id)}
				/>
			);
		});

		return (
			<footer className='footer'>
				<span className='todo-count'>{counter} items left</span>
				<ul className='filters'>{elements}</ul>
				<button className='clear-completed' onClick={clearCompleted}>
					Clear completed
				</button>
			</footer>
		);
	}
}

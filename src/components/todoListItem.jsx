import React from 'react';

export class TodoListItem extends React.Component {
	createTodoItem = () => {
		console.log(1);
	};
	deleteTodoItem = () => {
		console.log(2);
	};
	// 	return '';
	// 	// return this.TodoListItem.super.remove();
	// }
	// console.log(text);

	isDone = () => {
		console.log(this);
	};

	render() {
		const { text } = this.props;
		return (
			<div className='view'>
				<input className='toggle' type='checkbox' onChange={this.isDone} />
				<label>
					<span className='description'>{text}</span>
					{/* <span className='created'>created 17 seconds ago</span> */}
				</label>
				<button
					className='icon icon-edit'
					onClick={this.createTodoItem}
				></button>
				<button
					className='icon icon-destroy'
					onClick={this.deleteTodoItem}
				></button>
			</div>
		);
	}
}

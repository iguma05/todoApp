import React from 'react';

export class TodoListItem extends React.Component {
	state = {
		edit: false,
	};
	editItem = () => {
		this.setState(({ edit }) => {
			return { edit: !edit };
		});
	};
	// isDone = () => {
	// 	this.setState(({ done }) => {
	// 		return { done: !done };
	// 	});
	// };

	render() {
		const { done, text, onDeleted, onDone } = this.props;
		const { edit } = this.state;
		let classes = '';
		if (done) classes = 'completed';
		if (edit) classes = 'editing';
		return (
			<li className={classes}>
				<div className='view'>
					<input className='toggle' type='checkbox' onChange={onDone} />
					<label>
						<span className='description'>{text}</span>
						{/* <span className='created'>created 17 seconds ago</span> */}
					</label>
					<button className='icon icon-edit' onClick={this.editItem}></button>
					<button className='icon icon-destroy' onClick={onDeleted}></button>
				</div>
				{/* <input type='text' className='edit' value={text}></input> */}
			</li>
		);
	}
}

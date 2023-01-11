import React from 'react';

export class TodoListItem extends React.Component {
	state = {
		checked: false,
	};
	editItem = () => {
		console.log(1);
	};
	isDone = () => {
		this.setState(({ checked }) => {
			return { checked: !checked };
		});
	};

	render() {
		const { text, onDeleted } = this.props;
		const { checked } = this.state;
		let classes = 'description';
		if (checked) {
			classes += ' completed';
		}
		return (
			<div className='view'>
				<input className='toggle' type='checkbox' onChange={this.isDone} />
				<label>
					<span className={classes}>{text}</span>
					{/* <span className='created'>created 17 seconds ago</span> */}
				</label>
				<button className='icon icon-edit' onClick={this.editItem}></button>
				<button className='icon icon-destroy' onClick={onDeleted}></button>
			</div>
		);
	}
}

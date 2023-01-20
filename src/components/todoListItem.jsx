import React from 'react';

export class TodoListItem extends React.Component {
	state = {
		value: this.props.text,
	};

	editValue = (event) => {
		this.setState({ value: event.target.value });
	};

	render() {
		const { done, text, edit, onDeleted, onDone, saveChanges, editItem } =
			this.props;
		let classes = '';
		let checked = null;
		if (done) {
			classes = 'completed';
			checked = 'checked';
		}
		if (edit) classes = 'editing';
		return (
			<li className={classes}>
				<div className='view'>
					<input
						className='toggle'
						type='checkbox'
						onChange={onDone}
						checked={checked}
					/>
					<label>
						<span className='description'>{text}</span>
						{/* <span className='created'>created 17 seconds ago</span> */}
					</label>
					<button className='icon icon-edit' onClick={editItem}></button>
					<button className='icon icon-destroy' onClick={onDeleted}></button>
				</div>
				{classes === 'editing' && (
					<input
						type='text'
						className='edit'
						value={this.state.value}
						onChange={this.editValue}
						onKeyDown={saveChanges}
						autoFocus
					></input>
				)}
			</li>
		);
	}
}

export function TodoListItem({ text }) {
	function createTodoItem() {}
	function deleteTodoItem() {
		return '';
		// return this.TodoListItem.super.remove();
	}
	// console.log(text);
	return (
		<div className='view'>
			<input className='toggle' type='checkbox' />
			<label>
				<span className='description'>{text}</span>
				{/* <span className='created'>created 17 seconds ago</span> */}
			</label>
			<button className='icon icon-edit' onClick={createTodoItem}></button>
			<button className='icon icon-destroy' onClick={deleteTodoItem}></button>
		</div>
	);
}

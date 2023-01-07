export function View({text}) {
	// console.log();
	return (
		<div className='view'>
			<input className='toggle' type='checkbox' />
			<label>
				<span className='description'>{text}</span>
				{/* <span className='created'>created 17 seconds ago</span> */}
			</label>
			<button className='icon icon-edit'></button>
			<button className='icon icon-destroy'></button>
		</div>
	);
}

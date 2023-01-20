export function ButtonFilter({ value, filteredTodo, clicked }) {
	let classBtn = '';
	if (clicked) {
		classBtn = 'selected';
	}
	return (
		<li>
			<button className={classBtn} onClick={filteredTodo}>
				{value}
			</button>
		</li>
	);
}

import React from 'react';
import './App.css';

import './components/stylesAll.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { TodoList } from './components/todoList';

export class App extends React.Component {
	state = {
		data: [
			{ text: 'Completed task', id: 1 },
			{ text: 'Editing task', id: 2 },
			{ text: 'Active task', id: 3 },
		],
	};

	deleteItem = (id) => {
		this.setState(({ data }) => {
			const todoData = data.filter((item) => item.id !== id);
			return { data: todoData };
		});
	};

	render() {
		return (
			<section className='todoapp'>
				<Header />
				<section className='main'>
					<TodoList todos={this.state.data} onDeleted={this.deleteItem} />
					<Footer />
				</section>
			</section>
		);
	}
}

export default App;

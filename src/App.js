import React from 'react';
import './App.css';

import './components/stylesAll.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { TodoList } from './components/todoList';

class App extends React.Component {
	maxId = 100;
	state = {
		data: [
			this.createItem('Completed task'),
			this.createItem('Editing task'),
			this.createItem('Active task'),
		],
	};
	createItem(text) {
		return {
			text,
			done: false,
			id: this.maxId++,
		};
	}
	deleteItem = (id) => {
		this.setState(({ data }) => {
			const newData = data.filter((item) => item.id !== id);
			return { data: newData };
		});
	};

	addItem = (text) => {
		const newItem = this.createItem(text);
		this.setState(({ data }) => {
			const newData = [...data, newItem];
			return { data: newData };
		});
	};
	onDone = (id) => {
		this.setState(({ data }) => {
			const index = data.findIndex((el) => el.id === id);

			const oldItem = data[index];
			const newItem = { ...oldItem, done: !oldItem.done };

			const newData = [
				...data.slice(0, index),
				newItem,
				...data.slice(index + 1),
			];
			return { data: newData };
		});
	};

	render() {
		return (
			<section className='todoapp'>
				<Header addItem={this.addItem} />
				<section className='main'>
					<TodoList
						todos={this.state.data}
						onDone={this.onDone}
						onDeleted={this.deleteItem}
					/>
					<Footer />
				</section>
			</section>
		);
	}
}

export default App;

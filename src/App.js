/* eslint-disable semi */
import React from 'react';
import './App.css';

import './components/stylesAll.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { TodoList } from './components/todoList';

class App extends React.Component {
  maxId = 100;
  state = {
    data: [this.createItem('Completed task'), this.createItem('Editing task'), this.createItem('Active task')],
    buttons: [
      { id: 1, value: 'All', clicked: true },
      { id: 2, value: 'Active', clicked: false },
      { id: 3, value: 'Completed', clicked: false },
    ],
    btnFilter: 1,
  };

  createItem(text) {
    return {
      text,
      done: false,
      id: this.maxId++,
      edit: false,
      date: new Date(),
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

      const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return { data: newData };
    });
  };
  clearCompleted = () => {
    this.setState(({ data }) => {
      const newData = data.filter((item) => !item.done);
      return { data: newData };
    });
  };
  onClicked = (id) => {
    this.setState(({ buttons }) => {
      const newBtns = buttons.map((button) => {
        if (button.id === id) {
          return { ...button, clicked: true };
        } else return { ...button, clicked: false };
      });
      return { buttons: newBtns };
    });
  };
  filteredTodo = (id) => {
    this.setState({ btnFilter: id });
    this.onClicked(id);
  };

  editItem = (id) => {
    this.setState(({ data }) => {
      const newData = data.map((todo) => {
        if (todo.id === id) {
          return { ...todo, edit: true };
        } else return { ...todo };
      });
      return { data: newData };
    });
  };

  saveChanges = (id, event) => {
    if (event.key === 'Enter') {
      this.setState(({ data }) => {
        const newData = data.map((todo) => {
          if (todo.id === id) {
            return { ...todo, edit: false, text: event.target.value };
          } else return { ...todo };
        });
        return { data: newData };
      });
    }
  };

  render() {
    const toDoCount = this.state.data.filter((el) => !el.done).length;

    return (
      <section className="todoapp">
        <Header addItem={this.addItem} />
        <section className="main">
          <TodoList
            todos={this.state.data}
            edit={this.state.data.edit}
            onDone={this.onDone}
            onDeleted={this.deleteItem}
            saveChanges={this.saveChanges}
            editItem={this.editItem}
            btnFilter={this.state.btnFilter}
          />
          <Footer
            counter={toDoCount}
            buttons={this.state.buttons}
            clearCompleted={this.clearCompleted}
            filteredTodo={this.filteredTodo}
            onClicked={this.onClicked}
          />
        </section>
      </section>
    );
  }
}

export default App;

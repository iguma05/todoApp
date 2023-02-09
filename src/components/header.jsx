/* eslint-disable semi */
import React from 'react';
import PropTypes from 'prop-types';

export class Header extends React.Component {
  static propTypes = {
    addItem: PropTypes.func.isRequired,
  };
  state = {
    text: '',
  };

  changeText = (event) => {
    this.setState(() => {
      return { text: event.target.value };
    });
  };

  render() {
    const { addItem } = this.props;
    const createTodoItem = (event) => {
      if (event.key === 'Enter') {
        if (event.target.value) {
          addItem(this.state.text);
          this.setState(() => {
            return { text: '' };
          });
        }
      }
    };
    return (
      <header className="header">
        <h1>todos</h1>
        <form className="new-todo-form">
          <input
            className="new-todo"
            placeholder="Task"
            autoFocus
            value={this.state.text}
            onChange={this.changeText}
            onKeyDown={createTodoItem}
          />
          <input className="new-todo-form__timer" placeholder="Min" autoFocus />
          <input className="new-todo-form__timer" placeholder="Sec" autoFocus />
        </form>
      </header>
    );
  }
}

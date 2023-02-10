/* eslint-disable semi */
import React from 'react';
import PropTypes from 'prop-types';

export class Header extends React.Component {
  static propTypes = {
    addItem: PropTypes.func.isRequired,
  };
  state = {
    text: '',
    minutes: null,
    seconds: null,
  };

  changeText = (event) => {
    this.setState(() => {
      return { text: event.target.value };
    });
  };
  changeMinutes = (event) => {
    this.setState(() => {
      return { minutes: event.target.value };
    });
  };
  changeSeconds = (event) => {
    this.setState(() => {
      return { seconds: event.target.value };
    });
  };

  render() {
    const { addItem } = this.props;
    const createTodoItem = (event) => {
      const { text, minutes, seconds } = this.state;
      if (event.key === 'Enter') {
        if (event.target.value) {
          addItem(text, minutes, seconds);
          this.setState(() => {
            return { text: '', minutes: '', seconds: '' };
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
          <input
            className="new-todo-form__timer"
            placeholder="Min"
            autoFocus
            value={this.state.minutes}
            onChange={this.changeMinutes}
            onKeyDown={createTodoItem}
          />
          <input
            className="new-todo-form__timer"
            placeholder="Sec"
            autoFocus
            value={this.state.seconds}
            onChange={this.changeSeconds}
            onKeyDown={createTodoItem}
          />
        </form>
      </header>
    );
  }
}

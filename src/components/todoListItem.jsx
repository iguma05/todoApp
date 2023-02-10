/* eslint-disable semi */
import { formatDistanceToNow } from 'date-fns/esm';
import React from 'react';
import PropTypes from 'prop-types';

export class TodoListItem extends React.Component {
  static defaultProps = {
    done: false,
    edit: false,
  };

  static propTypes = {
    done: PropTypes.bool,
    text: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    edit: PropTypes.bool,
    onDeleted: PropTypes.func.isRequired,
    onDone: PropTypes.func.isRequired,
    saveChanges: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
  };
  secondTimer = null;

  state = {
    value: this.props.text,
    timer: this.props.time,
  };
  changeTimer = () => {
    if (this.state.timer > 0) {
      this.secondTimer = setInterval(() => this.setState({ timer: this.state.timer - 1 }), 1000);
    }
  };

  editValue = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { done, text, date, edit, onDeleted, onDone, saveChanges, editItem } = this.props;
    let classes = '';
    let checked = '';
    if (done) {
      classes = 'completed';
      checked = 'checked';
    }
    if (edit) classes = 'editing';

    let timeCreated = formatDistanceToNow(date, {
      includeSeconds: true,
      addSuffix: true,
    });
    let minutes = Math.floor(this.state.timer / 60);
    let seconds = this.state.timer % 60;
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    if (this.state.timer <= 0) {
      clearInterval(this.secondTimer);
    }

    return (
      <li className={classes}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={onDone} checked={checked} />
          <label>
            {text && (
              <>
                <span className="title" onClick={onDone}>
                  {text}
                </span>
                <span className="description">
                  <button className="icon icon-play" onClick={this.changeTimer}></button>
                  <button className="icon icon-pause" onClick={() => clearInterval(this.secondTimer)}></button>
                  <span>{`${minutes}: ${seconds}`}</span>
                </span>
              </>
            )}
            <span className="description">{`created ${timeCreated}`}</span>
          </label>
          <button className="icon icon-edit" onClick={editItem}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        {classes === 'editing' && (
          <input
            type="text"
            className="edit"
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

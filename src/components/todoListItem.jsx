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

  state = {
    value: this.props.text,
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

    return (
      <li className={classes}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={onDone} checked={checked} />
          <label>
            {text && (
              <span className="description" onClick={onDone}>
                {text}
              </span>
            )}
            <span className="created">{`created ${timeCreated}`}</span>
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

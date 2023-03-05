/* eslint-disable semi */
import { formatDistanceToNow } from 'date-fns/esm';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export function TodoListItem({ done, text, date, time, edit, onDeleted, onDone, saveChanges, editItem }) {
  let secondTimer = null;
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(text);
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    changeTimer();
    return () => {
      clearInterval(secondTimer);
    };
  });
  const changeTimer = () => {
    if (timer > 0) {
      secondTimer = setInterval(() => setTimer(timer - 1), 1000);
    }
  };

  const editValue = (event) => {
    setValue(event.target.value);
  };

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
  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  if (timer <= 0) {
    clearInterval(secondTimer);
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
                <button className="icon icon-play" onClick={changeTimer}></button>
                <button className="icon icon-pause" onClick={() => clearInterval(secondTimer)}></button>
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
          value={value}
          onChange={editValue}
          onKeyDown={saveChanges}
          autoFocus
        ></input>
      )}
    </li>
  );
}
TodoListItem.defaultProps = {
  done: false,
  edit: false,
};
TodoListItem.propTypes = {
  done: PropTypes.bool,
  text: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  edit: PropTypes.bool,
  onDeleted: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
  saveChanges: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

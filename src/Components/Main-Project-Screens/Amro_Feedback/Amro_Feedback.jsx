import React, { Fragment, useState } from 'react';
import { Grid } from '@material-ui/core';
import './Amro_Previous_styles.css';

const Amro_feedback = (props) => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const now = new Date();
  const submit = (evnet, props) => {};
  return (
    <Fragment>
      <form onSubmit={submit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="name"
        />
        <input
          type="Feedback"
          name="Feedback"
          value={feedback}
          onChange={(event) => setFeedback(event.target.value)}
          placeholder="password"
        />
        <button> Submit </button>
      </form>
    </Fragment>
  );
};
export default Amro_feedback;

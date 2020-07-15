import React, { Fragment, useState } from 'react';
import { Grid } from '@material-ui/core';
import db from '../../../firebase';
import Button from '@material-ui/core/Button';

const Amro_feedback = (props) => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const reset = () => {
    setName((previousName) => {
      return '';
    });
    setFeedback((previousFeedback) => {
      return '';
    });
  };
  const submit = (event) => {
    const now = new Date().toLocaleString();
    db.collection('Feedback').add({
      fullname: name,
      feedback: feedback,
      Datesubmitted: now,
    });
    event.preventDefault();
    reset();
  };

  return (
    <Fragment>
      <form onSubmit={submit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="FullName"
        />
        <input
          type="Feedback"
          name="Feedback"
          value={feedback}
          onChange={(event) => setFeedback(event.target.value)}
          placeholder="Write your feedback here"
        />
        <Button
          onClick={submit}
          variant="contained"
          color="primary"
          disableElevation
        >
          Disable elevation
        </Button>
      </form>
      <button onClick={reset}>Click here to clear the boxes</button>
    </Fragment>
  );
};
export default Amro_feedback;

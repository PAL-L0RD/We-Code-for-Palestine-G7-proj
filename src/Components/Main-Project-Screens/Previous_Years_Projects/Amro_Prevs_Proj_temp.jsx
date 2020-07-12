import React, { Fragment, useState } from 'react';
import { Grid } from '@material-ui/core';
import './Amro_Previous_styles.css';

const Amro_Previous_template = (props) => {
  const [name, setName] = useState('Amro');
  const [age, setAge] = useState('17');
  //   setName((previousName) => {
  //     return previousName;
  //   });
  return (
    <Fragment>
      <div>
        <h1>{props.projname}</h1>
        <br></br>
        <img className="limit2" src={props.imagelink} />
        <br></br>
        <h2>
          Team Members: <h3>{props.teammembers}</h3>
        </h2>
        <br></br>
        <h4>{props.discribtion}</h4>
        <br></br>
        <h4>
          <a href={props.repolink}>Link to Repository</a>
        </h4>
      </div>
    </Fragment>
  );
};
export default Amro_Previous_template;

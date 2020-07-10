import React, { Fragment, useState } from 'react';
import { Grid } from '@material-ui/core';
const Amro_Previous_template = (props) => {
  const [name, setName] = useState('Amro');
  const [age, setAge] = useState('17');
  //   setName((previousName) => {
  //     return previousName;
  //   });
  return (
    <Fragment>
      <div>
        <h1></h1>
        <h1>{props.projname}</h1>
        <img src={props.imagelink} />
        <h2>
          Team Members: <h3>{props.teammembers}</h3>
        </h2>
        <h4>{props.discribtion}</h4>
        <h4>
          <a href={props.repolink}>Link to Repository</a>
        </h4>
      </div>
    </Fragment>
  );
};
export default Amro_Previous_template;

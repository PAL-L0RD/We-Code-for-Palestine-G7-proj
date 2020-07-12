import React from 'react';
import { Grid, formatMs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import db from '../firebase.js';

class App3 extends React.Component {
  handleClick() {
    db.collection('Masters').doc('Amro').set({
      Fullname: 'Amro Abou-Hachem',
      email: 'amro@amro.ps',
    });
  }
  render() {
    return (
      <div>
        <div>
          <div className="warpper">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 0,
                textAlign: 'center',
              }}
            >
              <h1 style={{ backgroundColor: '#3f51b5', color: 'white' }}>
                Welcome!
              </h1>
            </div>
            <h1>This is for testing</h1>
            <br></br>
            <h4>
              If you are here, good chances you’re creative, passionate and
              clever. Code for Palestine was born in 2015 out of a desire to
              teach coding and entrepreneurial skills to some of the brightest
              high school students throughout the West Bank and Gaza Strip. The
              organization funding the initiative, the PalTel Group Foundation
              [PGF], recognized that there weren’t enough students graduating
              from Palestinian universities in STEM fields, and those that were
              graduating lacked some of the critical skills needed to succeed in
              the private sector. Most importantly, PGF saw an opportunity for a
              tech-driven startup scene to help tackle some of Palestine’s
              problems and realized that a culture of entrepreneurship needed to
              be bred in order for a startup culture to blossom. Code for
              Palestine is a three-year-long program, beginning the summer
              before 10th grade and concluding after 12th grade. Each year has
              many in-person sessions but is kicked off by a two-week camp held
              during the summer. Volunteer undergraduate instructors from
              Stanford University have served as the primary teachers during the
              two-week summer camp.
            </h4>
            <h2> I am testing for fun</h2>

            <br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default App3;
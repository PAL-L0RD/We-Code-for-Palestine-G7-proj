import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import Amro_Previous_template from './Amro_Prevs_Proj_temp';
class Amro_Y3_Projects extends React.Component {
  render() {
    return (
      <Fragment>
        <Grid container>
          <Grid item sm={1} xs={0} />
          <Grid container sm={10} xs={12}>
            <Grid item xs={12}>
              <Amro_Previous_template
                projname=" DocTech"
                imagelink="https://raw.githubusercontent.com/kvdsouza/cfpFinalProjects2019/master/imagesGithub/docTech.png"
                teammebers="Ahmad Dumaidi, Fouad Turjman, Mayar Shanan, Saja Abuodeh"
                discribtion=" DocTech's goal is to provide software that helps organize patients' medical information. The application is aimed at doctor's and hospitals."
                repolink="https://github.com/ah3311and55/doctech"
              />
            </Grid>
            <Grid item xs={12}>
              <Amro_Previous_template
                projname=" Luchi"
                imagelink="https://raw.githubusercontent.com/kvdsouza/cfpFinalProjects2019/master/imagesGithub/luchiMugShot.png"
                teammebers="Ahmad Drawsheh, Ghada Issa, Kareem Awwad, Majd Barghouti, Rashiqa Ramahih"
                discribtion=" Luchi is an application that allows community organizations to connect to young adults, providing access to greater activities for Palestinian youth"
                repolink="https://github.com/majdbar321/luchi-app-2019"
              />
            </Grid>
            <Grid item xs={12}>
              <Amro_Previous_template
                projname="Wajhni"
                imagelink="https://raw.githubusercontent.com/kvdsouza/cfpFinalProjects2019/master/imagesGithub/wajhni.png"
                teammebers="Ahmad Durra, Michel, Subhi Awwad, Tahseen Aliahmad (with help from Y2 student Amro Abou-Hachem)"
                discribtion=" Wajhni is an application that aims to make studying for the tawjihi more accessible and effective for students through providing an online curriculum for students to study from."
                repolink="https://github.com/MisterMassad/Wajhni"
              />
            </Grid>
          </Grid>
          <Grid item sm={1} xs={0} />
        </Grid>
      </Fragment>
    );
  }
}
export default Amro_Y3_Projects;

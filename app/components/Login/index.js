/**
*
* Login
*
*/

import React from 'react';
import Paper from '@material-ui/core/Paper';
// import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const StyledGrid = withStyles({
  container: {
    marginTop: '84px',
  }
})(Grid);

const StyledPaper = withStyles({
  root: {
    height: '100%',
    padding: "150px",
  }
})(Paper);

const StyledTextField = withStyles({
  root: {
    marginLeft: "5px",
    marginRight: "5px",
  }
})(TextField);



class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <StyledGrid container justify="center" direction="row" alignItems="center">
        <StyledPaper>
          <Typography variant="headline" gutterBottom>
            Login
          </Typography>

          <StyledTextField
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
          <StyledTextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          />
          <Grid item xs={12}>
            <Button variant="contained" color="secondary">
              Sign In
            </Button>
          </Grid>
        </StyledPaper>
      </StyledGrid>
    );
  }
}

Login.propTypes = {
};

export default (Login);

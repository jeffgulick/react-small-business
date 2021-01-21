import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Paper, Container } from '@material-ui/core';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#333333',
  },
  link: {
    textDecoration: 'none',
    color: 'white'
  },
  status: {
    backgroundColor: '#D3D3D3',
    paddingLeft:'15pt'
  }
}));

export default function NavBar(props) {
  const logIn = props.loggedIn;
  const classes = useStyles();

  const logOut = () => {
    props.signOut();
    document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; //gets rid of cookie
  }
  
  return (
      <div className={classes.root}>
            <Paper>
              <AppBar className={classes.appBar} position='static' >
                <Toolbar>
                  <Typography variant="h5" className={classes.title}>
                    Lubbock Small Business
                  </Typography>
                  {logIn ?
                    <div>
                      <Button color="inherit"><Link className={classes.link} to="/">Listings</Link></Button>
                      <Button color="inherit"><Link className={classes.link} to="/add">Add</Link></Button>
                      <Button onClick={logOut} color="inherit"><Link className={classes.link} to="/">LOG OUT</Link></Button>
                    </div>
                    :
                    <div>
                      <Button color="inherit"><Link className={classes.link} to="/">Listings</Link></Button>
                      <Button color="inherit"><Link className={classes.link} to="/login">Login</Link></Button>
                    </div>}
                </Toolbar>
              </AppBar>
              {logIn ? <div className={classes.status}>Logged in as: {props.user.getUserName.userName}</div> : ''}
            </Paper>
      </div>
  );
}
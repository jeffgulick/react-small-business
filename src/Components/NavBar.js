import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Paper, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

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
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
          <Paper>
            <AppBar className={classes.appBar} position='static' >
              <Toolbar>
                <Typography variant="h5" className={classes.title}>
                  Lubbock Small Business
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Sign Out</Button>
              </Toolbar>
            </AppBar>
          </Paper>
    </div>
  );
}
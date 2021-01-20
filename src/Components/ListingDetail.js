import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
    },
    paper: {
      maxWidth: 400,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
  }));
  
  const message = `Truncation should be conditionally applicable on this long line of text
   as this is a much longer line than what the container can support. `;
  
const ListingDetail = (props) => {
    const id = props.match.params.id;
    const selection = props.business.find(item => item.id == id);

    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>{message}</Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs>
              <Typography noWrap>{message}</Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs>
              <Typography>{message}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );}
 
export default ListingDetail;
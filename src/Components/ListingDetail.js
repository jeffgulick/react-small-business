import { useState, useEffect } from 'react';
import Map from './Map';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(0, 3),
      marginTop: "30pt"
    },
    paper: {
      maxWidth: 450,
      margin: `${theme.spacing(0)}px auto`,
      padding: theme.spacing(2),
    },
    grid: {
      margin:0,
    },
  }));
  
const ListingDetail = (props) => {
    const id = props.match.params.id;
    const selection = props.business.find(item => item.id == id);
    const classes = useStyles();
    let location = {
      lat:'',
      long:''
  }

    const [latt, setLatt] = useState(33.57);
    const [long, setLong] = useState(-101.89);

    useEffect(() => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${selection.address}&key=${process.env.REACT_APP_MAP_API}`)
        .then(response => response.json())
        .then(data => {
            setLatt(data.results[0].geometry.location.lat);
            setLong(data.results[0].geometry.location.lng);
            location.lat = latt
            location.long = long
            props.addLocation(location)
        })
        .catch(error => {
            console.log(error);
        })
    },[latt, long, selection.address]);

    return (
      <Container>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography style={{fontWeight:"bold"}} noWrap>{selection.name}</Typography>
                <Typography noWrap>{selection.address}</Typography>
                <Typography style={{fontWeight:"bold"}} noWrap>Hours: </Typography>
                <Typography noWrap>Hours: {selection.hours}</Typography>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
              </Grid>
              <Grid item xs>
                <Typography style={{fontWeight:"bold"}} noWrap>Description: </Typography>
                <Typography>{selection.description}</Typography>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
              </Grid>

              <Grid item xs>
                <Map latt={latt} long={long} listingName={selection.name} />
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Container>
    );}
 
export default ListingDetail;
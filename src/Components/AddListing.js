import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { nanoid } from 'nanoid';
import Map from './Map';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: 'flex',
    },
    paper: {  
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      height: "100%"
    },
    button: {
        width: '35ch',
        alignContent:"center",
        justifyContent:"center",
        marginTop: "35pt",
        backgroundColor:"#EE0000",
      },
  }));

const AddListing = (props) => {
    const classes = useStyles();
    const [newBusiness, setNewBusiness] = useState({});
    const [id, setId] = useState('');
    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        const business = {...newBusiness, id}
        props.addBusiness(business);
        history.push('/')
        console.log(business)
    }

    const handleChange = (event) => {
        setId(nanoid());
        setNewBusiness({ ...newBusiness, [event.target.name]: event.target.value });
      }
    
    return (
        <div className={classes.root}>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                    <form onSubmit={handleSubmit}>
                        <TextField className={classes.TextField} id="outlined-basic" label="Name *" size="medium"
                            value = {newBusiness.name}
                            name = 'name'
                            fullWidth
                            onChange = {handleChange}
                        /><br/>
                        <TextField className={classes.TextField} id="outlined-basic" label="Address *" size = "small"
                            type = "text"
                            name = "address"
                            fullWidth
                            value = {newBusiness.address}
                            onChange = {handleChange}
                        /><br/>
                        <TextField className={classes.TextField} id="outlined-basic" label="Hours *" size = "small"
                            type = "text"
                            name= "hours"
                            fullWidth
                            value = {newBusiness.hours}
                            onChange = {handleChange}
                        /><br/>
                        <TextField className={classes.TextField} id="outlined-basic" label="Description *" size = "small"
                            type = "text"
                            name ="description"
                            fullWidth
                            value = {newBusiness.description}
                            onChange = {handleChange}
                        /><br/>
                        <Button type="submit" className={classes.button} variant="contained" color="primary">Submit</Button>
                    </form>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                    <Map latt={33.57} long={-101.89} />
                </Paper>
            </Grid>
        </div>
    );
}
 
export default AddListing;
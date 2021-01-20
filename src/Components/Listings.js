import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const Listings = (props) => {    
    const status = props.loggedIn
    return (
        <Container>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.business.map((item, index)=>(
                        <TableRow key={item.id}>
                            <TableCell><Link to={`/listing/${item.id}`}>{item.name}</Link></TableCell>
                            <TableCell>{item.description}</TableCell>
                            <TableCell>{item.hours}</TableCell>
                            <TableCell>{item.address}</TableCell>
                            {status ? 
                                <TableCell>
                                    <DeleteIcon onClick={()=> props.removeBusiness(index)} /> 
                                </TableCell> : ""}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    )}
 
export default Listings;
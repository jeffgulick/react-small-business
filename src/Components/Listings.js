import React from 'react'
import { Container, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@material-ui/core';
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
                        <TableRow key={index}>
                            <TableCell>
                            <Button>{item.name}</Button></TableCell>
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
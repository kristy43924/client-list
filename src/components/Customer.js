import React from 'react';
import {TableRow,TableCell} from '@material-ui/core';
import { Link } from 'react-router-dom';
function Customer({data}) {
    return (
        <TableRow>
            <TableCell>{data.cno}</TableCell>
            <TableCell><Link to={`/customer/${data.cno}`}>{data.cname}</Link></TableCell>
            <TableCell>{data.cphone}</TableCell>
            <TableCell>{data.cbirthday}</TableCell>
            <TableCell>{data.cgender}</TableCell>
            <TableCell>{data.caddr}</TableCell>
        </TableRow>
    );
}

export default Customer;
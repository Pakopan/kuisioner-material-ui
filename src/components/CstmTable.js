import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


export default function CstmTable({nama, kota, umur, hobi, hp, gender}) {
    return (
            <TableRow>
              <TableCell align="center">{nama}</TableCell>
              <TableCell align="center">{kota}</TableCell>
              <TableCell align="center">{umur}</TableCell>
              <TableCell align="center">{hobi}</TableCell>
              <TableCell align="center">{hp}</TableCell>
              <TableCell align="center">{gender}</TableCell>
            </TableRow>
    )
}

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { FormHelperText } from '@material-ui/core';

const styles = makeStyles(
    {
        field : {
            paddingBottom : "1rem",
        }
    }
)

export default function Form(props) {
    const kelas = styles();
    return (
                <TextField className={kelas.field} value={props.value} label={props.name} onChange={props.onChange} variant="filled"/>
    );
}

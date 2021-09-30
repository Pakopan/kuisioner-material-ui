import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from 'react'


export default function CstmButton(props) {
    return (
        <div>
            <Button onClick={props.fungsi} variant="contained" color="primary">
                {props.txt}
            </Button>
        </div>
    )
}


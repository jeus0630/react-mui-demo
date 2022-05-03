import {Box, FormControlLabel, Switch, FormLabel, FormControl, FormGroup} from '@mui/material';
import React, { useState } from 'react';

export default function MuiSwitch(){
    const [checked, setChecked] = useState(false);
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    }
    

    return (
        <Box>
            <FormControl>
                <FormLabel>Switches</FormLabel>
                <FormGroup >
                    <FormControlLabel label='Morning' control={<Switch color='error' checked={checked} onChange={changeHandler}></Switch>}></FormControlLabel>
                    <FormControlLabel label='Afternoon' control={<Switch color='info' checked={checked} onChange={changeHandler}></Switch>}></FormControlLabel>
                    <FormControlLabel label='Evening' control={<Switch color='success' checked={checked} onChange={changeHandler}></Switch>}></FormControlLabel>
                </FormGroup>
            </FormControl>
        </Box>
    )    
}
import {Box, TextField, MenuItem} from '@mui/material';
import React, { useState } from 'react';

export default function MuiSelect(){

    const [country, setCountry] = useState<string[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        console.log(typeof value);
        
        setCountry(typeof value === 'string' ? value.split(',') : value);
    }

    return (
        <Box width='250px'>
            <TextField label='Select country' select value={country} onChange={handleChange} fullWidth SelectProps={{
                multiple: true
            }} size='small' color='secondary' helperText={!country.length? 'Please select your country': null} error={!country.length}>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='AU'>Austrailia</MenuItem>
            </TextField>
        </Box>
    )
}
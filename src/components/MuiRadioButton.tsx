import {Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText} from '@mui/material';
import React, {useState} from 'react';

export default function MuiRadioButton(){

    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    console.log(value);
    
    return (
        <Box>
            <FormControl error>
                <FormLabel id='job-experience-group-label'>
                    Years of experience
                </FormLabel>
                <RadioGroup name='job-experience-group' aria-labelledby='job-experience-group-label' value={value} onChange={handleChange} row>
                    <FormControlLabel control={<Radio size='medium' color='warning'></Radio>} label='0-2' value='0-2'></FormControlLabel>
                    <FormControlLabel control={<Radio size='small'></Radio>} label='3-5' value='3-5'></FormControlLabel>
                    <FormControlLabel control={<Radio></Radio>} label='6-10' value='6-10'></FormControlLabel>
                </RadioGroup>
                {
                    !value &&
                <FormHelperText>Please Select one of them</FormHelperText>
                }
            </FormControl>
        </Box>
    )
}
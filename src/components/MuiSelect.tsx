import {Box, TextField, MenuItem} from '@mui/material';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

const fetchSelectList = async () => {
    try{
        const res = await fetch('http://localhost:3004/list');
        const data = await res.json();
        return data;
    }catch(err){
        console.log(err);
    }
}

type MenuType = {
    name: string
}

export default function MuiSelect(){
    const {data, isLoading, isError} = useQuery('get-select-list',fetchSelectList);
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
                {
                    data?.map((menu: MenuType) => (
                        <MenuItem key={menu.name} value={menu.name}>{menu.name}</MenuItem>
                    ))
                }
            </TextField>
        </Box>
    )
}
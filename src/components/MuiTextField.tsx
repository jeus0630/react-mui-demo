import { Stack, TextField, InputAdornment } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";

export default function MuiTextField(){

    const [value, setValue] = useState('');

    return (
        <Stack spacing={4}>
            <Stack direction={"row"} spacing={2}>
                <TextField label='Name' variant="outlined"/>
                <TextField label='Name' variant="filled"/>
                <TextField label='Name' variant="standard"/>
            </Stack>
            <Stack direction={"row"} spacing={2}>
                <TextField label='Small secondary' size='small' color='secondary' variant="outlined"/>
            </Stack>
            <Stack direction={"row"} spacing={2}>
                <TextField label='Form Input' value={value} required error={!value} helperText={!value? 'Required' : null} onChange={e => setValue(e.target.value)}/>
                <TextField label='Password' type='password' helperText='Do not share your password with anyone' disabled/>
                <TextField label='Read Only' InputProps={{readOnly : true}} type='password' helperText='Do not share your password with anyone'/>
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Amount' InputProps={{
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>
                }}></TextField>
                <TextField label='Weight' InputProps={{
                    endAdornment: <InputAdornment position='end'>kg</InputAdornment>
                }}>
                </TextField>
                <TextField label='Password' type='password' InputProps={{
                    endAdornment: <InputAdornment position='end'>
                        <VisibilityOffIcon></VisibilityOffIcon>
                    </InputAdornment>
                }}>
                </TextField>
            </Stack>
        </Stack>
    )
}
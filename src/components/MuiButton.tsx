import { Button, Stack, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import React, { useState } from "react";

export default function MuiButton(){

    const [formats, setFormats] = useState<string[]>([]);

    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
        setFormats(updatedFormats);
    }

    console.log(formats);
    
    return (
        <Stack spacing={4}>
            <Stack direction='row'>
                <ButtonGroup variant="contained" orientation="vertical" size='small' color='secondary' aria-label='alignment button group'>
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction='row'>
                <ToggleButtonGroup aria-label="text formatting" value={formats} onChange={handleFormatChange} size='small' color='success' exclusive>
                    <ToggleButton value='bold'><FormatBoldIcon></FormatBoldIcon></ToggleButton>
                    <ToggleButton value='italic'><FormatItalicIcon></FormatItalicIcon></ToggleButton>
                    <ToggleButton value='underlined'><FormatUnderlinedIcon></FormatUnderlinedIcon></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}
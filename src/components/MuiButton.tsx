import { Button, Stack, ButtonGroup } from "@mui/material";

export default function MuiButton(){
    return (
        <Stack direction='row'>
            <ButtonGroup variant="contained" orientation="vertical" size='small' color='secondary' aria-label='alignment button group'>
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </Stack>
    )
}
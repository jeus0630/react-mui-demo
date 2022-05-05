import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

export default function MuiNavbar(){
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit'>
                    <CatchingPokemonIcon></CatchingPokemonIcon>
                </IconButton>
                <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                    POKEMON
                </Typography>
                <Stack direction={'row'} spacing={2}>
                    <Button color='inherit'>
                        Features
                    </Button>
                    <Button color='inherit'>
                        Pricing
                    </Button>
                    <Button color='inherit'>
                        About
                    </Button>
                    <Button color='inherit'>
                        Login
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
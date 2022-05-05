import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem } from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import React, {useState} from 'react';

export default function MuiNavbar(){

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

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
                    <Button color='inherit' id='resources-button' onClick={handleClick} 
                    aria-controls={open ? 'resources-menu' : undefined}
                    aria-haspopup='true'
                    aria-expanded={open ? 'true' : undefined}
                    >
                        Resources
                    </Button>
                    <Button color='inherit'>
                        Login
                    </Button>
                </Stack>
                <Menu id='resources-menu' anchorEl={anchorEl} open={open} MenuListProps={{
                    'aria-labelledby': 'resources-button'
                }}
                onClose={handleClose}
                >
                    <MenuItem>
                        Blog
                    </MenuItem>
                    <MenuItem>
                        Podcast
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}
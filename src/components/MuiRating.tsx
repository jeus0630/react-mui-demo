import {Stack, Rating} from "@mui/material";
import React, {useState} from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function MuiRating(){

    const [rating, setRating] = useState<number | null>(null);

    const changeHandler = (evnet: React.ChangeEvent<{}>, newValue: number | null) => {
        setRating(newValue);
    }

    return (
        <Stack spacing={2}>
            <Rating value={rating} onChange={changeHandler} precision={0.5} size='large'
            icon={<FavoriteIcon fontSize='inherit' color='error'></FavoriteIcon>}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit"></FavoriteBorderIcon>}
            highlightSelectedOnly></Rating>
        </Stack>
    )
}   
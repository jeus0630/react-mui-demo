import {Box, Card, CardContent, Typography, CardActions, Button, CardMedia} from '@mui/material';

export default function MuiCard(){
    return (
        <Box width='300px'>
            <Card>
                <CardMedia 
                    component={'img'}
                    height='140'
                    image='https://source.unsplash.com/random'
                    alt='unsplash image'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        React
                    </Typography>
                    <Typography gutterBottom variant='body2' color={'text.secondary'}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In dicta eos sapiente, dolores dolorem commodi amet ut libero necessitatibus odit, alias repellendus unde. Magni pariatur, culpa harum nam eligendi ipsum.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Learn more</Button>
                </CardActions>
            </Card>
        </Box>
    )
}
import { Box } from "@mui/material";

export default function MuiLayout(){
    return (        
        <>
            <Box sx={{
                backgroundColor:'primary.main',
                color:'white',
                width:'100px',
                height:'100px',
                padding:'16px',
                '&:hover': {
                    backgroundColor: 'primary.light'
                }
            }}>
                Codevolution
            </Box>
            <Box 
            display={'flex'} 
            height='100px' 
            width='100px' 
            bgcolor='success.light'
            p={2}
            >

            </Box>
        </>
    )
}
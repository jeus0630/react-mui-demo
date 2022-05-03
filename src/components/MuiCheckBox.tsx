import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from "@mui/material";
import React, {useState} from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default function MuiCheckBox(){
    const [acceptTnC, setAcceptTnC] = useState(false);
    const [skills, setSkills] = useState<string[]>([]);
    const [a, setA] = useState<string[]>([]);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked)
    }

    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value);

        if(index !== -1){
            setSkills(
                skills.filter(skill => skill !== event.target.value)
            )

            return;
        }

        setSkills([
            ...skills,
            event.target.value
        ])
        
    }

    return (
        <Box>
            <Box>
                <FormControlLabel 
                label='I accept terms and conditions' 
                control={<Checkbox checked={acceptTnC} 
                onChange={handleChange}></Checkbox>}/>
            </Box>
            <Box>
                <Checkbox icon={<BookmarkBorderIcon></BookmarkBorderIcon>} checkedIcon={<BookmarkIcon></BookmarkIcon>}
                checked={acceptTnC} onChange={handleChange}/>
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup>
                        <FormControlLabel label="HTML" control={<Checkbox value="html" checked={skills.includes('html')} onChange={handleSkillChange}/>}/>
                        <FormControlLabel label="CSS" control={<Checkbox value="css" checked={skills.includes('css')} onChange={handleSkillChange}/>}/>
                        <FormControlLabel label="Javascript" control={<Checkbox value="javascript" checked={skills.includes('javascript')} onChange={handleSkillChange}/>}/>
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    )
}
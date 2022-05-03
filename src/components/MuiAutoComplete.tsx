import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from 'react';

type Skill = {
    id: number;
    label: string;
}

const skills = ['HTML', 'CSS', 'JS', 'TS', 'React'];

const skillsOptions = skills.map((skill, index) => {
    return {
        id: index + 1,
        label: skill
    }
})

export default function MuiAutoComplete() {

    const [value, setValue] = useState<string | null>(null);
    const [skill, setSkill] = useState<Skill | null>(null);

    const changeHandler = (event: React.ChangeEvent<{}>, newValue: string | null) => {
        setValue(newValue);
    }

    const changeHandler2 = (event: React.ChangeEvent<{}>, newValue: Skill | null) => {
        setSkill(newValue);
    }

    console.log(skill);

    return (
        <Stack spacing={2} width='250px'>
            <Autocomplete
                onChange={changeHandler}
                value={value}
                options={skills}
                renderInput={(params) => <TextField {...params} label='Skills' />}
                freeSolo></Autocomplete>
            <Autocomplete
                onChange={changeHandler2}
                value={skill}
                options={skillsOptions}
                renderInput={(params) => <TextField {...params} label='Skills' />}
            ></Autocomplete>
        </Stack >
    )
}
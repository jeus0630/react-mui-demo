import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";

export default function MuiAccordion() {

    const [expanded, setExpanded] = useState<string | false>(false);
    const handleChange = (panel: string) => (event:React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    id='panel1-header'
                    aria-controls="panel1-content"
                    expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorem ipsam magnam consectetur. Labore tempora nam corrupti iusto fugit harum odit dolor, nisi cum optio hic itaque numquam facere. Ipsum.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    id='panel2-header'
                    aria-controls="panel2-content"
                    expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorem ipsam magnam consectetur. Labore tempora nam corrupti iusto fugit harum odit dolor, nisi cum optio hic itaque numquam facere. Ipsum.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    id='panel3-header'
                    aria-controls="panel3-content"
                    expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
                    <Typography>Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorem ipsam magnam consectetur. Labore tempora nam corrupti iusto fugit harum odit dolor, nisi cum optio hic itaque numquam facere. Ipsum.</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
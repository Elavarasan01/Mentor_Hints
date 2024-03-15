import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, TextField, Typography } from '@mui/material';
import UnderLine from '../assets/underline.png';


export default function Hero() {
    return (
        <Box
            id="hero"
            sx={(theme) => ({
                width: '100%',
                backgroundColor: "#0B93DB"
            })}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    pt: { xs: 14, sm: 20 },
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <div style={{ display: "flex" }}>
                    <div style={{textAlign:"left"}}>
                        <Typography variant='h6'>START TO SUCCESS</Typography>
                        <Typography sx={{ color: "#fff" }} variant='h4'>Learn to code</Typography>
                        <span style={{ marginLeft: "9rem"}}><img src={UnderLine} height={10} width={70} alt="tick mark" /></span>
                        <Typography sx={{ color: "#fff" }} variant='h4'>with your personal mentor</Typography>
                        <span style={{ marginLeft: "14rem"}}><img src={UnderLine} height={10} width={100} alt="tick mark" /></span>
                        <p style={{color:"#fff"}}>Get into tech with 1:1 live sessions</p>
                     <Button variant='contained' sx={{backgroundColor:"#FF914D",margin:"5px"}}>Match me with your tutor</Button>
                     <TextField label="Search by mentor" sx={{paddingTop:"0px",margin:"5px"}}/> 
                    </div>
                    <div></div>
                </div>
            </Container>
        </Box>
    );
}
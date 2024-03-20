import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, InputAdornment, TextField, Typography } from '@mui/material';
import UnderLine from '../assets/underline.png';
import Frame1 from '../assets/girl-frame.png';
import Frame2 from '../assets/boy-frame.png';
import StarIcon from '@mui/icons-material/Star';
import SearchIcon from '@mui/icons-material/Search';

export default function BannerSec() {
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
                    <div style={{ textAlign: "left", paddingLeft: "5rem" }}>
                        <Typography variant='h6'>START TO SUCCESS</Typography>
                        <Typography sx={{ color: "#fff" }} variant='h4'>Learn to code</Typography>
                        <span style={{ marginLeft: "9rem" }}><img src={UnderLine} height={10} width={70} alt="tick mark" /></span>
                        <Typography sx={{ color: "#fff", letterSpacing: "3px" }} variant='h4'>with your personal mentor</Typography>
                        <span style={{ marginLeft: "14rem" }}><img src={UnderLine} height={10} width={100} alt="tick mark" /></span>
                        <p style={{ color: "#fff" }}>Get into tech with 1:1 live sessions</p>
                        <Button variant='contained' sx={{ backgroundColor: "#FF914D", margin: "5px" }}>Match me with your tutor</Button>
                        <TextField InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon  sx={{color:"#FF914D"}}/>
            </InputAdornment>
          ),
        }} label="Search by mentor" sx={{ padding: "0px", margin: "5px", width: "50%" }}/>
                    </div>
                    <div style={{ display: "flex", paddingLeft: "5rem" }} className='top-right'>
                        <img src={Frame1} alt='girl in the frame' height={270} width={200} style={{ zIndex: '1' }} />
                        <img src={Frame2} alt='boy in the frame' height={270} width={200} style={{ zIndex: '33', marginLeft: "-30px" }} />
                        <div style={{ display: "flex", alignItems: "center", marginLeft: "-4rem", marginTop: "9rem", zIndex: "99" }}>
                            <Button size='large' variant='contained' startIcon={<StarIcon sx={{ backgroundColor: "transparent", color: "#0B93DB" }} />} sx={{ backgroundColor: "#fff", color: "#000" }}>5.0 rating</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </Box>
    );
}
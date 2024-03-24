import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, InputAdornment, TextField, Typography, useMediaQuery } from '@mui/material';
import UnderLine from '../assets/underline.png';
import Frame1 from '../assets/girl-frame.png';
import Frame2 from '../assets/boy-frame.png';
import StarIcon from '@mui/icons-material/Star';
import SearchIcon from '@mui/icons-material/Search';
import SimpleDialog from './SimpleDialog';

export default function BannerSec() {
    const isSmallscreeen = useMediaQuery('((max-width:600px))');
    const [openDialog, setOpenDialog] = React.useState(false);
    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = (value) => {
        setOpenDialog(false);
    };
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
                <div style={{ display: "flex", flexDirection: isSmallscreeen ? "column" : "row" }}>
                    <div style={{ textAlign: "left", paddingLeft: isSmallscreeen ? "0rem" : "5rem" }}>
                        <Typography variant='h6'>START TO SUCCESS</Typography>
                        <Typography sx={{ color: "#fff" }} variant={isSmallscreeen ? 'h5' : 'h4'}>Learn to code</Typography>
                        <span style={{ marginLeft: "9rem", display: isSmallscreeen ? 'none' : 'block' }}><img src={UnderLine} height={10} width={70} alt="tick mark" /></span>
                        <Typography sx={{ color: "#fff", letterSpacing: "3px" }} variant={isSmallscreeen ? 'h5' : 'h4'}>with your personal mentor</Typography>
                        <span><img src={UnderLine} alt="tick mark" style={{
                            maxWidth: '50%',
                            height: '3%',
                            display: isSmallscreeen ? 'none' : 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }} /></span>
                        <p style={{ color: "#fff" }}>Get into tech with 1:1 live sessions</p>
                        <Button variant='contained' sx={{ backgroundColor: "#FF914D", margin: "5px" }} onClick={handleClickOpen}>Match me with your tutor</Button>
                        <TextField InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: "#FF914D" }} />
                                </InputAdornment>
                            ),
                        }} label="Search by mentor" sx={{ padding: "0px", margin: "5px", width: "50%" }} />
                    </div>
                    <div style={{ display: "flex" }} className='top-right'>
                        <img src={Frame1} alt='girl in the frame' height={isSmallscreeen ? 150 : 270} width={isSmallscreeen ? 150 : 200} />
                        <img src={Frame2} alt='boy in the frame' height={isSmallscreeen ? 150 : 270} width={isSmallscreeen ? 150 : 200} style={{ zIndex: '33', marginLeft: "-30px" }} />
                        <div style={{ display: "flex", alignItems: "center", marginLeft: "-4rem", marginTop: "9rem", zIndex: "99" }}>
                            <Button size={isSmallscreeen ? 'small' : 'large'} variant='contained' startIcon={<StarIcon sx={{ backgroundColor: "transparent", color: "#0B93DB" }} />} sx={{ backgroundColor: "#fff", color: "#000" }}>5.0 rating</Button>
                        </div>
                    </div>
                </div>
                <SimpleDialog
                    open={openDialog}
                    onClose={handleClose}
                />
            </Container>
        </Box>
    );
}
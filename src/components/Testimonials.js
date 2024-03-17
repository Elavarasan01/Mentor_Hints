import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import UnderLine from '../assets/underline.png';
import UpperCard from '../assets/Card.png';
import LowerCard from '../assets/Card-2.png';
import CurlLine from '../assets/curlyline.png';
import CalenderPic from '../assets/CalenderCard.png';

export default function Testimonials() {
  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 4 },
        pb: { xs: 8, sm: 4 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
        backgroundColor: "#E4F0FF",
        maxWidth: "100% !important"
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '75%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography
          component="h5"
          variant="h4"
          sx={{

            color: "#0B93DB"
          }}
        >
          Learn&nbsp;
          <Typography
            component="span"
            variant="h4" sx={{ color: "#000" }}>
            your way
          </Typography>
          <div style={{ margin: "-2rem 1rem 0rem -8rem" }}><img src={UnderLine} height={10} width={100} alt="tick mark" /></div>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Everyone's needs are different - We match you with experienced tutors who
          personalise your learning to help you achieve your goals.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={5} sx={{textAlign:"left",marginTop:"7rem"}}>
            <Typography variant='h4'>
              Make Mentor Hint moves in your career
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Access top software developers
              who help you switch to a tech role or get promoted
            </Typography>
            <img src={CalenderPic} alt='schedule table' height={300} width={300} style={{marginTop:"5rem",marginBottom:0}}/>
          </Grid>
          <Grid item xs={12} sm={6} md={7} sx={{marginTop:"2rem"}}>
            <img src={UpperCard} height={200} width={400}/>
            <img src={CurlLine} height={80} width={80} style={{transform:"rotate(90deg)",marginLeft:"-3rem",zIndex:"-1"}}/>
            <img src={LowerCard} height={125} width={400} style={{marginTop:"-2rem",marginLeft:"6rem"}}/>
            <Typography variant='h4' sx={{marginTop:"7rem"}}>
            Upskill on your own time
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{margin:"1rem"}}>
            Take classes when you’re free. 
            You can easily do it alongside your full time job or over the weekends.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
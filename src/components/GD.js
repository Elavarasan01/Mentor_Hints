import * as React from 'react';
import Container from '@mui/material/Container';
import { Grid, Typography } from '@mui/material';
import GroupDisscuss from '../assets/GD.png';
import Star from '../assets/starEmpty.png';
import RedCircle from '../assets/redDot.png';
import PurpleCircle from '../assets/purpleDot.png';
import Frame from '../assets/Rectangle.png';

export default function GD() {

  return (
    <Container
      sx={{
        pt: { xs: 4, sm: 8 },
        pb: { xs: 8, sm: 12 },
        maxWidth:"100% !important",
        backgroundColor:"#E4F0FF",
        display:"flex",
        justifyContent:"center"
      }}
    >
     <Grid md={5} className='image-container'>
     <img src={GroupDisscuss} alt='Group Disscusstion' height={200} width={350}/>
       <img src={Star} alt='star' height={30} width={30} />
       <img src={Frame} alt='Rectange frame' height={220} width={350}/>
       <img src={RedCircle} alt='Red dot' height={10} width={10}/>
       <img src={PurpleCircle} alt='Purple Dot' height={20} width={30}/>
     </Grid>
     <Grid md={7}>
     <Typography
          component="h5"
          variant="h4"
          sx={{

            color: "#000"
          }}
        >
          Join the&nbsp;
          <Typography
            component="span"
            variant="h4" sx={{ color: "#0B93DB" }}>
            best learnig
          </Typography>
        </Typography>
     </Grid>
    </Container>
  );
}
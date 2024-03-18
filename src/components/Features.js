import * as React from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import UnderLine from '../assets/underline.png';
import VideoBack from '../assets/videoBack.png';
import Play from '../assets/play.png';
export default function Features() {
  return (
    <Container id="features" sx={{ py: { xs: 4, sm: 8 } }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography
          component="h5"
          variant="h4"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignSelf: 'center',
            textAlign: 'center',
          }}
        >
          How can&nbsp;
          <Typography
            component="span"
            variant="h4"
            sx={{ color: "#0B93DB" }}>
            1:1 mentorship
          </Typography>
          help you
          <span style={{ marginLeft: "-17rem", marginTop: "1rem" }}><img src={UnderLine} height={10} width={100} alt="tick mark" /></span>
        </Typography>
      </div>
      <div className='container-image'>
        <img src={VideoBack} alt='background video' className='image' height={300} width={700} />
        <img src={Play} alt='play button' className='image2' height={50} width={50} />
      </div>
    </Container>
  );
}
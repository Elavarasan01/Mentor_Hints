import * as React from 'react';
import Container from '@mui/material/Container';
import { Typography, useMediaQuery } from '@mui/material';
import UnderLine from '../assets/underline.png';
import VideoBack from '../assets/videoBack.png';
import Play from '../assets/play.png';
export default function Features() {
  const isSmallscreeen = useMediaQuery('((max-width:600px))');
  return (
    <Container id="features" sx={{ py: { xs: 4, sm: 8 },display:"flex",justifyContent:"center",flexDirection:"column" }}>
        <Typography
          component="div"
          variant={isSmallscreeen?"h6":"h4"}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent:"center"
          }}
        >
            {/* <div style={{ margin: "2rem -19rem 0rem 0rem" }}><img src={UnderLine} height={10} width={150} alt="tick mark" /></div> */}
          How can&nbsp;
          <Typography
            component="span"
            variant={isSmallscreeen?"h6":"h4"}
            sx={{ color: "#0B93DB"}}>
            1:1 mentorship
            <div style={{display:isSmallscreeen?'none':'block'}}><img src={UnderLine} height={10} width={150} alt="tick mark" /></div>
          </Typography>
          <Typography  variant={isSmallscreeen?"h6":"h4"} sx={{paddingLeft:"7px"}}>
          help you
          </Typography>
          
        </Typography>
      
      <div className='container-image'>
        <img src={VideoBack} alt='background video' className='image' height={isSmallscreeen?150:400} width={isSmallscreeen?250:800} />
        <img src={Play} alt='play button' className='image2' height={isSmallscreeen?20:50} width={isSmallscreeen?20:50} />
      </div>
    </Container>
  );
}
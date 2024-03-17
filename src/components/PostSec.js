import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import SkirtImg from '../assets/skirt.png';
import Camera from '../assets/camera.png';
import Pose from '../assets/posing.png';
import { Card, CardContent } from '@mui/material';
import UnderLine from '../assets/underline.png';
const logoStyle = {
  width: '140px',
  height: 'auto',
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link href="https://mui.com/">Sitemark&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const steps=[
  {imgUrl:SkirtImg,head:"The View From Here",desc:`Aenean eleifend ante maecenas pulvinar montes 
  lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.`},
  {imgUrl:Camera,head:"Depriving a Black Student of Opportunities ...",desc:`Aenean eleifend ante maecenas pulvinar montes 
  lorem et pede dis dolor pretium donec dictum.`},
  {imgUrl:Pose,head:"Everything I Know About Creating Buzz, I Learned...",desc:`Aenean eleifend ante maecenas pulvinar montes 
  lorem et pede dis dolor pretium donec dictum..`}
]

export default function PostSec() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
          <Typography
          component="h5"
          variant="h4"
          sx={{
            color: "#0B93DB"
          }}
        >
          Stay&nbsp;
          <Typography
            component="span"
            variant="h4" sx={{ color: "#000" }}>
           Curious
          </Typography>
          <div style={{ margin: "-2rem 1rem 0rem 0rem" }}><img src={UnderLine} height={10} width={100} alt="tick mark" /></div>
        </Typography>
        <Typography variant="body1" color="text.secondary">
        Various versions have evolved over the years, sometimes by accident,
        </Typography>
     
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
            justifyContent:"center",
            marginTop:"1rem"
          }}
        >
         {steps.map((info, index) => (
                  <Card key={index} sx={{
                    minWidth: 200,
                    maxWidth: 300,
                    marginX: 1,
                  }}>
                    <img src={info.imgUrl} alt={`Step ${index + 1}`} style={{ width: '100%' }} />
                    <CardContent>
                      <Typography variant="h5" component="h2" sx={{ marginTop: 1 }}>
                        {info.head}
                      </Typography>
                      <Typography color="textSecondary" sx={{ marginTop: 1,fontSize:"11px" }}>
                        {info.desc}
                      </Typography>
                    </CardContent>
                    <Box sx={{ borderTop: '1px solid rgba(0, 0, 0, 0.12)', padding: 1, marginTop: 'auto', display: "flex", justifyContent: "space-between" }}>
                      <Typography variant='h6' sx={{textDecoration:"underline"}}>View Post</Typography>
                    </Box>
                  </Card>
                ))}
        </Box>
    </Container>
  );
}
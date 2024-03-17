import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import UnderLine from '../assets/underline.png';
import Card1 from '../assets/card1.png';
import Card2 from '../assets/card2.png';
import Card3 from '../assets/card3.png';
import Sep1 from '../assets/Date1.png'
import Sep2 from '../assets/Date2.png'
import Sep3 from '../assets/Date3.png'
import LeftProfile from '../assets/left-profile.png';
import RightProfile from '../assets/right-profile.png';
import { Button, CardContent, MobileStepper } from '@mui/material';
import Quatation from '../assets/quatation.png';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { useTheme } from '@emotion/react';

const steps = [
  { imageUrl: Card1, head: "Tell us your goals", desc: "Share the subject you need help with along with your contact details so we can get in touch with you", date: Sep1 },
  { imageUrl: Card2, head: "Get Connected", desc: "We go beyond basic matching algorithms. Our dedicated team handpicks tutors based on your needs", date: Sep2 },
  { imageUrl: Card3, head: "Start Learning", desc: "Take your learning to the next level with tailored guidance", date: Sep3 }
]
const steps2 = [
  {
    imageUrl: LeftProfile, head: "Jenny Wilson", subHead: "UI-UX Designer", desc1: `Ut pharetra ipsum nec leo blandit, 
  sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.
   Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.`, desc2: `Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. 
   In hac habitasse platea dictumst.`},
  {
    imageUrl: RightProfile, head: "Guy Hawkins", subHead: "UI-UX Designer", desc1: `Ut pharetra ipsum nec leo blandit, 
   sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.
    Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.`, desc2: `Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. 
    In hac habitasse platea dictumst.`}
]
export default function Highlights() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, steps.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 4 },
        pb: { xs: 8, sm: 4 },
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography
            component="h5"
            variant="h4"
            sx={{ color: "#000" }}
          >
            How to&nbsp;
            <Typography
              component="span"
              variant="h4" sx={{ color: "#0B93DB" }}>
              get started
            </Typography>
            <div style={{ margin: "-2rem 1rem 0rem 4rem" }}><img src={UnderLine} height={10} width={150} alt="tick mark" /></div>
          </Typography>
        </Box>
        <Grid container spacing={2.5} sx={{ justifyContent: "center" }}>
          {steps.map((info, index) => (
            <Card key={index} sx={{
              minWidth: 200,
              maxWidth: 310,
              marginX: 1,
            }}>
              <img src={info.imageUrl} alt={`Step ${index + 1}`} style={{ width: '100%' }} />
              <div style={{ textAlign: "right", marginTop: "-1.5rem" }}><img src={info.date} width={40} height={40} /></div>
              <CardContent sx={{ textAlign: "left" }}>
                <Typography variant="h5" component="h5" sx={{ marginTop: 1 }}>
                  {info.head}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: "12px" }}>
                  {info.desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>

        <Typography
          component="h5"
          variant="h4"
          sx={{ color: "#000" }}
        >
          Student&nbsp;
          <Typography
            component="span"
            variant="h4" sx={{ color: "#0B93DB" }}>
            Feedback
          </Typography>
          <div style={{ margin: "-2rem 1rem 0rem 8rem" }}><img src={UnderLine} height={10} width={150} alt="tick mark" /></div>
        </Typography>

        <Grid container spacing={2.5} sx={{ justifyContent: "center" }}>
          {steps2.map((info, index) => (
            <Card key={index} sx={{
              minWidth: 200,
              maxWidth: 400,
              marginX: 1,
              backgroundColor: "#fff"
            }}>
              <CardContent sx={{ textAlign: "left" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h5" component="h5" sx={{ marginTop: 1, display: "flex", alignItems: "center" }}>
                    <div><img src={info.imageUrl} height={35} width={35} /></div>
                     <div>{info.head} <br/> <Typography sx={{fontSize:"11px",margin:"2px"}}>{info.subHead}</Typography></div>
                  </Typography>
                  <div><img src={Quatation} alt='quatation mark' width={30} height={30} /></div>
                </div>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: "12px" }}>
                  {info.desc1}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: "12px" }}>
                  {info.desc2}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
        <MobileStepper
              variant="dots"
              steps={4}
              position="static"
              activeStep={activeStep}
              sx={{ maxWidth: 400, flexGrow: 1,backgroundColor:"transparent" }}
              nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === steps.length}>
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                </Button>
              }
            />
      </Container>
    </Box>
  );
}
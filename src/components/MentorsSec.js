import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Button, Card, CardContent } from '@mui/material';
import UnderLine from "../assets/underline.png";
import AudiotrackOutlinedIcon from '@mui/icons-material/AudiotrackOutlined';
import { ReactComponent as PenNib } from '../assets/PenNib.svg';
import { ReactComponent as StageMike } from '../assets/MicrophoneStage.svg';
import { ReactComponent as TextIcon } from '../assets/FileHtml.svg';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import BussinessImg from '../assets/BussinessImg.png';
import DesignImg from '../assets/DesignImg.png';
import BoyImg from '../assets/HtmlImg.png';

import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));
const steps = [{ imgUrl: BoyImg, head: "Ragul", desc: "Frontend @ Company Name", year: 2 },
{ imgUrl: DesignImg, head: "Lilly", desc: "UIUX Designer  @ Company Name", year: 7 },
{ imgUrl: BussinessImg, head: "John", desc: "Frontend  @ Company Name", year: 4 },
{ imgUrl: BoyImg, head: "Ragul", desc: "Frontend @ Company Name", year: 2 }];

export default function MentorSec() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, steps.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };
  return (
    <Box id="logoCollection" sx={{ py: 4,backgroundColor:"#F1F7FF" }}>
      <Grid container>
        <Grid md={5}>
          <div style={{ padding: "5rem 5rem 5rem 15rem" }}>
            <Typography
              component="h1"
              variant="h4"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignSelf: 'center',
                textAlign: 'right',
              }}
            >
              Most&nbsp;
              <Typography
                component="span"
                variant="h4"
                sx={{ color: "#0B93DB" }}>
                Popular
              </Typography>
              <span style={{ marginLeft: "-7rem", marginTop: "1rem" }}><img src={UnderLine} height={10} width={100} alt="tick mark" /></span>
            </Typography>
            <Typography variant='h4' sx={{ textAlign: "left", color: "#0B93DB" }}>
              Mentors
            </Typography>
          </div>
        </Grid>
        <Grid md={7}>
          <div>
            <Button variant='contained' size='small' sx={{ margin: "2px", width: "110px" }}>All</Button>
            <Button sx={{ backgroundColor: "#fff", color: "#000", margin: "2px" }} startIcon={<PenNib style={{ height: 20, width: 20 }} />} variant='contained' size='small'>Design</Button>
            <Button sx={{ backgroundColor: "#fff", color: "#000", margin: "2px" }} startIcon={<TextIcon style={{ height: 20, width: 20 }} />} variant='contained' size='small'>Developement</Button>
            <Button sx={{ backgroundColor: "#fff", color: "#000", margin: "2px" }} startIcon={<StageMike style={{ height: 20, width: 20 }} />} variant='contained' size='small'>Marketing</Button>
            <Button sx={{ backgroundColor: "#fff", color: "#000", margin: "2px" }} startIcon={<AudiotrackOutlinedIcon />} variant='contained' size='small'>Music</Button>

            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 2 }}>
              <Box sx={{ display: 'flex', overflowX: 'auto', textAlign: "start" }}>
                {steps.map((info, index) => (
                  <Card key={index} sx={{
                    minWidth: 200,
                    maxWidth: 300,
                    marginX: 1,
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}>
                    <img src={info.imgUrl} alt={`Step ${index + 1}`} style={{ width: '100%' }} />
                    <CardContent>
                      <Typography variant="h5" component="h2" sx={{ marginTop: 1 }}>
                        {info.head}
                      </Typography>
                      <Typography color="textSecondary" sx={{ marginTop: 1 }}>
                        {info.desc}
                      </Typography>
                    </CardContent>
                    <Box sx={{ borderTop: '1px solid rgba(0, 0, 0, 0.12)', padding: 1, marginTop: 'auto', display: "flex", justifyContent: "space-between" }}>
                      <Typography variant='h5'>{info.year}yr</Typography>
                      <ArrowOutwardIcon />
                    </Box>
                  </Card>
                ))}
              </Box>
            </Box>
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
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
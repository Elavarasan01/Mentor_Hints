import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button, useMediaQuery } from '@mui/material';
import UnderLine from "../assets/underline.png";
import AudiotrackOutlinedIcon from '@mui/icons-material/AudiotrackOutlined';
import { ReactComponent as PenNib } from '../assets/PenNib.svg';
import { ReactComponent as StageMike } from '../assets/MicrophoneStage.svg';
import { ReactComponent as TextIcon } from '../assets/FileHtml.svg';
import BussinessImg from '../assets/BussinessImg.png';
import DesignImg from '../assets/DesignImg.png';
import BoyImg from '../assets/HtmlImg.png';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import HoverCard from './HoverCard';

const steps = [{ imgUrl: BoyImg, head: "Ragul", desc1: "Frontend @ Company Name",desc2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",role:"Frontend Developer",skills:"Html,CSS,Bootstrap", year: 2 },
{ imgUrl: DesignImg, head: "Lilly", desc1: "UIUX Designer  @ Company Name",desc2:"Lorem Ipsum is simply dummy text of  when an unknown printer took a  specimen book. It has survived not only five centuriesLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",role:"UI / UX Designer",skills:"Figma,Photoshop", year: 7 },
{ imgUrl: BussinessImg, head: "John", desc1: "Frontend  @ Company Name",desc2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",role:"Backend Developer",skills:"Java,Python", year: 4 },
{ imgUrl: BoyImg, head: "Ragul", desc1: "Frontend @ Company Name",desc2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",role:"Frontend Developer",skills:"Html,CSS,Bootstrap", year: 2 }];

export default function MentorSec() {
  const isSmallscreeen = useMediaQuery('((max-width:600px))');
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
        <Grid md={5} xs={12} item sx={{justifyContent:"center",display:"flex",alignItems:"center"}}>
          <div style={{ padding: "5% 5% 5% 15%" }}>
            <Typography
              component="h1"
              variant={isSmallscreeen?"h6":"h4"}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'row', md: 'row' },
                alignSelf: 'center',
                textAlign: 'right',
                fontWeight:600
              }}
            >
              Most&nbsp;
              <Typography
                component="span"
                variant={isSmallscreeen?"h6":"h4"}
                sx={{ color: "#0B93DB", fontWeight:600 }}>
                Popular
              </Typography>
              <span style={{ marginLeft: "-7rem", marginTop: "1rem",display:isSmallscreeen?'none':'block' }}><img src={UnderLine} height={10} width={100} alt="tick mark" /></span>
            </Typography>
            <Typography  variant={isSmallscreeen?"h6":"h4"} sx={{ textAlign: "left", color: "#0B93DB", fontWeight:600 }}>
              Mentors
            </Typography>
          </div>
        </Grid>
        <Grid md={7} xs={12} item>
          <div>
            <Button variant='contained' size='small' sx={{ margin: "2px", width: "110px" }}>All</Button>
            <Button sx={{ backgroundColor: "#fff", color: "#000", margin: "2px" }} startIcon={<PenNib style={{ height: 20, width: 20 }} />} variant='contained' size='small'>Design</Button>
            <Button sx={{ backgroundColor: "#fff", color: "#000", margin: "2px" }} startIcon={<TextIcon style={{ height: 20, width: 20 }} />} variant='contained' size='small'>Developement</Button>
            <Button sx={{ backgroundColor: "#fff", color: "#000", margin: "2px" }} startIcon={<StageMike style={{ height: 20, width: 20 }} />} variant='contained' size='small'>Marketing</Button>
            <Button sx={{ backgroundColor: "#fff", color: "#000", margin: "2px" }} startIcon={<AudiotrackOutlinedIcon />} variant='contained' size='small'>Music</Button>

            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 2 }}>
              <Box sx={{ display: 'flex', overflowX: 'auto', textAlign: "start" }}>
                {steps.map((info, index) => (
                    <HoverCard
                    index={index}
                    head={info.head}
                    year={info.year}
                    imgUrl={info.imgUrl}
                    initialContent={info.desc1}
                    fullContent={info.desc2}
                    role={info.role}
                    skills={info.skills}
                  />
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
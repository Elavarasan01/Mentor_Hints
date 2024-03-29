import * as React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import AppAppBar from './components/AppAppBar';
import Highlights from './components/Highlights';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import getLPTheme from './getLPTheme';
import BannerSec from './components/BannerSec';
import MentorSec from './components/MentorsSec';
import PostSec from './components/PostSec';
import GD from './components/GD';
import MentorOutline from './assets/mentorOutline.png';
import { Grid, useMediaQuery } from '@mui/material';

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100dvw',
        position: 'fixed',
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label="Platform"
        sx={{
          backgroundColor: 'background.default',
          '& .Mui-selected': {
            pointerEvents: 'none',
          },
        }}
      >
        <ToggleButton value>
          <AutoAwesomeRoundedIcon sx={{ fontSize: '20px', mr: 1 }} />
          Custom theme
        </ToggleButton>
        <ToggleButton value={false}>Material Design 2</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.shape({
    valueOf: PropTypes.func.isRequired,
  }).isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

export default function LandingPage() {
  const isSmallscreeen = useMediaQuery('((max-width:600px))');
  const [mode, setMode] = React.useState('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode },typography: {
    fontFamily: [
      'Public Sans',
      'sans-serif'
    ].join(','),
  }, });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <BannerSec />
      <Box sx={{ bgcolor: 'background.default' }}>
        <MentorSec />
        <Features />
        <Testimonials />
        <Highlights />
        <PostSec />
        <GD /> 
        <Footer />
        <Grid sx={{justifyContent:"center"}} md={12} item>
      <img src={MentorOutline} alt='mentor logo' height={isSmallscreeen?100:200} width={isSmallscreeen?250:500}/>
     </Grid>
      </Box>
    </ThemeProvider>
  );
}
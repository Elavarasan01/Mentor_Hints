import * as React from 'react';
import Container from '@mui/material/Container';
import { Button, Grid, Typography, useMediaQuery } from '@mui/material';
import GroupDisscuss from '../assets/GroupDisscuss.png';

export default function GD() {
  const isSmallscreeen = useMediaQuery('((max-width:600px))');
  return (
    <Container
      sx={{
        pt: { xs: 4, sm: 4 },
        pb: { xs: 8, sm: 8 },
        maxWidth: "100% !important",
        backgroundColor: "#E4F0FF",
        display: "flex",
        flexDirection:isSmallscreeen?"column":"row",
        justifyContent: "center"
      }}
    >
      <Grid md={5} xs={12} sx={{ marginRight: "1rem" }} item>
        <img src={GroupDisscuss} alt='GD photo' height={isSmallscreeen?150:250} width={isSmallscreeen?250:400} />
      </Grid>
      <Grid md={7} xs={12} sx={{ textAlign: "left", marginLeft: "1rem", paddingTop: "3rem" }} item>
        <Typography
          component="h5"
          variant={isSmallscreeen?"h6":"h4"}
          sx={{
            color: "#000",
            fontWeight:600
          }}
        >
          Join the&nbsp;
          <Typography
            component="span"
            variant={isSmallscreeen?"h6":"h4"} sx={{ color: "#0B93DB",fontWeight:600 }}>
            best learning
          </Typography>
        </Typography>
        <Typography variant={isSmallscreeen?"h6":"h4"} sx={{fontWeight:600}}>
          Platform.
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Start learning by resgistering for free
        </Typography>
        <Button size={isSmallscreeen?'small':'mediem'} sx={{ margin: "1rem", backgroundColor: "#0B93DB", color: "#fff" }}>Find a Mentor</Button>
      </Grid>
    </Container>
  );
}
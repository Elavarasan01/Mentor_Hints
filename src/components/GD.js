import * as React from 'react';
import Container from '@mui/material/Container';
import { Button, Grid, Typography } from '@mui/material';
import GroupDisscuss from '../assets/GroupDisscuss.png';

export default function GD() {

  return (
    <Container
      sx={{
        pt: { xs: 4, sm: 4 },
        pb: { xs: 8, sm: 8 },
        maxWidth: "100% !important",
        backgroundColor: "#E4F0FF",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Grid md={5} sx={{ marginRight: "1rem" }}>
        <img src={GroupDisscuss} alt='GD photo' height={250} width={400} />
      </Grid>
      <Grid md={7} sx={{ textAlign: "left", marginLeft: "1rem", paddingTop: "3rem" }}>
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
            best learning
          </Typography>
        </Typography>
        <Typography variant="h4">
          Platform
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Start learning by resgistering for free
        </Typography>
        <Button size='mediem' sx={{ margin: "1rem", backgroundColor: "#0B93DB", color: "#fff" }}>Fina a Mentor</Button>
      </Grid>
    </Container>
  );
}
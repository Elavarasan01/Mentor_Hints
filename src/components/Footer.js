import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import LogoMentor from '../assets/MentorLogo.png';
import facebook from '../assets/_Facebook.png';
import insta from '../assets/_Instagram.png';
import twitter from '../assets/_Twitter.png';
import linkedIn from '../assets/_Linkedin.png';

export default function Footer() {
  return (
    <Container id="faq"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Grid xs={6} sm={6} >
        <div style={{ display: "flex", justifyContent: "center" }}> <img src={LogoMentor} alt='brand icon' height={50} width={150} /></div>
        <div style={{ display: "flex", marginTop: "2rem" }}>
          <img src={facebook} alt='facebook' height={25} width={25} style={{ margin: "5px" }} />
          <img src={twitter} alt='twitter' height={25} width={25} style={{ margin: "5px" }} />
          <img src={insta} alt='instagram' height={25} width={25} style={{ margin: "5px" }} />
          <img src={linkedIn} alt='linkedin' height={25} width={25} style={{ margin: "5px" }} />
        </div>
      </Grid>
      <Grid xs={6} sm={6} sx={{ display: "flex", gap: { xs: 6, sm: 10 }, justifyContent: "flex-end" }} >
        <Grid md={3}> <Typography variant="body2" color="text.secondary" mt={1}>HOW IT WORKS</Typography></Grid>
        <Grid md={3}>
          <Typography variant="body2" color="text.secondary" mt={1}>FAQ</Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>PRIVACY POLICY</Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>TERMS AND CONDITIONS</Typography>
        </Grid>
        <Grid md={3}>
          <Typography variant="body2" color="text.secondary" mt={1}>BLOG</Typography>
        </Grid>
        <Grid md={3}>
        <Typography
          component="h5"
          variant="body2"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignSelf: 'center',
            justifyContent:"center",
            textAlign: 'center',
          }}
        >
          ARE YOU HIRING?&nbsp;
          <Typography
            component="span"
            variant="body2"
            sx={{ color: "#FF914D" }}>
           FIND TALEND
          </Typography>
        </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
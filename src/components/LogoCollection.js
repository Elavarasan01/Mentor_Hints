import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));

export default function LogoCollection() {
  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
        <Grid container>
      <Grid md={4}>
        <Item>
        <Typography variant='h4'>
            Most Popular
        </Typography>
        <Typography variant='h4'>
            Mentors
        </Typography>
        </Item>
      </Grid>
      <Grid md={8}>
     <Item>
        <Button variant='contained'>All</Button>
        </Item>
      </Grid>
      </Grid>
    </Box>
  );
}
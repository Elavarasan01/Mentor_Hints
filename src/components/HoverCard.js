import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Dialog, DialogContent, Grid, Paper, useMediaQuery } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const HoverCard = ({ initialContent, fullContent,head,year,imgUrl,index,role,skills }) => {
  const isSmallscreeen = useMediaQuery('((max-width:600px))');
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
     <Card key={index} sx={{
        minWidth: 200,
        maxWidth: 300,
        marginX: 1,
        cursor:"pointer"
      }}  onClick={handleOpen}>
        <img src={imgUrl} alt={`Step ${index + 1}`} style={{ width: '100%' }} />
        <CardContent>
          <Typography variant="h5" component="h2">
            {head}
          </Typography>
          <Typography color="textSecondary">
          {initialContent}
          </Typography>
        </CardContent>
        <Box sx={{ borderTop: '1px solid rgba(0, 0, 0, 0.12)', padding: 1, marginTop: 'auto', display: "flex", justifyContent: "space-between" }}>
          <Typography variant='h5'>{year}yr</Typography>
          <ArrowOutwardIcon />
        </Box>
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <img src={imgUrl} alt={head} style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Box>
                <Typography variant={isSmallscreeen?"h6":"h5"}>{head}</Typography>
                <Typography variant={isSmallscreeen?"body2":"body1"}>{role}</Typography>
                <Typography variant={isSmallscreeen?"body2":"body1"}>{skills}</Typography>
                <Typography variant={isSmallscreeen?"body2":"body1"}>{year}yrs</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Paper elevation={0}>
                <Typography variant={isSmallscreeen?"body2":"body1"}>{fullContent}</Typography>
              </Paper>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      </>
  );
};

export default HoverCard;

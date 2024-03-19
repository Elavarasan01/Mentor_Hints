import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const HoverCard = ({ initialContent, fullContent,head,year,imgUrl,index }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  return (
     <Card key={index} sx={{
        minWidth: 200,
        maxWidth: 300,
        marginX: 1,
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scaleX(1.2)',
        }, 
      }}  onMouseEnter={() => setShowFullContent(true)}
      onMouseLeave={() => setShowFullContent(false)}>
        <img src={imgUrl} alt={`Step ${index + 1}`} style={{ width: '100%' }} />
        <CardContent>
          <Typography variant="h5" component="h2">
            {head}
          </Typography>
          <Typography color="textSecondary">
          {showFullContent ? fullContent : initialContent}
          </Typography>
        </CardContent>
        <Box sx={{ borderTop: '1px solid rgba(0, 0, 0, 0.12)', padding: 1, marginTop: 'auto', display: "flex", justifyContent: "space-between" }}>
          <Typography variant='h5'>{year}yr</Typography>
          <ArrowOutwardIcon />
        </Box>
      </Card>
  );
};

export default HoverCard;

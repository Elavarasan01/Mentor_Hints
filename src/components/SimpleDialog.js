import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { TextField, useMediaQuery } from '@mui/material';

const emails = ['username@gmail.com', 'user02@gmail.com'];

export default function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const isSmallscreeen = useMediaQuery('((max-width:600px))');

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        <Typography variant={isSmallscreeen?"h6":"h5"}>Help us with your number,<br/> and we'll match you with <br/>the best tutor</Typography>
      </DialogTitle>
      <List sx={{ p: 1 }}>
          <ListItem disableGutters>
           <TextField label="Name" variant="outlined" color='success'/>
          </ListItem>
          <ListItem disableGutters>
           <TextField label="Phone Number" variant="outlined" color='success'/>
          </ListItem>
          <ListItem disableGutters>
           <TextField label="Skills you want to learn" variant="outlined" color='success'/>
          </ListItem>
          <ListItem sx={{display:"flex",justifyContent:"center"}}>
            <Button sx={{backgroundColor:"#0B93DB",color:"#fff"}}>Get Started</Button>
          </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string
};

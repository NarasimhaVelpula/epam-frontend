import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormDialog from './InterestDialog';


export default function OutlinedCard(props) {
  const [open, setOpen] = React.useState(props.open);
    const [postId,setPostId]=React.useState(null)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const card = (
        <React.Fragment>
          <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Owner : {props.property.ownerId}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Rent : {props.property.rent}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Deposit : {props.property.deposit}
            </Typography>
            <Typography variant="h5" component="div">
              Size : {props.property.size}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Rooms: {props.property.rooms}
            </Typography>
            <Typography variant="body2">
              Address:
              <br />
              {props.property.address}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleClickOpen}>ShowInterest</Button>
          </CardActions>
          <FormDialog open={open} postId={props.property._id} handleClose={handleClose}/>
        </React.Fragment>
      );

  return (
    <Box sx={{ minWidth: 275, marginTop: '40px' }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from '../axios'
import { LoadingButton } from '@mui/lab';

export default function FormDialog(props) {
  
    const {open,handleClose, postId}=props
    const [loading,setLoading]=React.useState(false)
    const handleSubmit=()=>{
        setLoading(true)
        axios.post(`posts/showInterest/${postId}`,{},{
            headers:{authtoken: localStorage.getItem('authtoken')}
        })
        .then(
            res=>{
                alert('Interest Sent Sucessfully')
                handleClose()
            }
            
        )
        .catch(err=>{
            alert("Something got failed, Please try again")
        })
    }
  return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Send Interest</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To send Your Interest to this Property, please enter your mobile number here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Mobile Number"
        
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <LoadingButton 
          size="small"
          loadingIndicator="Sending..."
          loading={loading}
          onClick={handleSubmit}>Send Interest</LoadingButton>
        </DialogActions>
      </Dialog>

  );
}

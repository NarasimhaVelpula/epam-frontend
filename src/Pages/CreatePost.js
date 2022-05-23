import { Alert, Box, Button, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import axios from '../axios'
import LoadingButton from '@mui/lab/LoadingButton';
import React from 'react'
import ResponsiveAppBar from '../Components/Appbar'
import useCheckAuthorized from './useCheckAuthorized'
import { useNavigate } from "react-router-dom";

function CreatePost() {
  useCheckAuthorized()
  const [errorMessage, seterrorMessage] = React.useState("")
  const [loader,setLoader]=React.useState(false)
  const navigate=useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
     const data = new FormData(event.currentTarget);
      const rent= data.get('rent')
      const deposit=data.get('deposit')
      const address=data.get('address')
      const rooms=data.get('rooms')
      const size=data.get('size')
      //console.log(rent,deposit,address,rooms,size)
      setLoader(true)
    axios.post('posts/createPost',{rent,deposit,address,rooms,size},
      {headers:{authtoken: localStorage.getItem('authtoken')}
    })
    .then(res=>{
      alert("Post Updated")
      setLoader(false)
    })
    .catch(err=>{
        seterrorMessage("Invalid Details")
        setLoader(false)
    })
  };

  return (
   <>
    <ResponsiveAppBar />
    <Container>
    <Typography component="h1" variant="h5">
            Add Your Property
          </Typography>
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              
              required
              
              id="rent"
              label="Rent"
              name="rent"
              autoFocus
              variant='standard'
              type='number'
            />
            <br />
            <TextField
            
              required
              
              name="deposit"
              label="Security Deposit"
              type="number"
              id="deposit"
              variant='standard'
            />
            <br />
            <TextField
            
              required
              
              name="address"
              label="Address"
              type="string"
              id="address"
              variant='standard'
              multiline
            />
            <br />
           
        <br />
        <div style={{display: 'flex', alignItems:'end',justifyContent:'center'}}>
            <TextField
            
            required
            
            name="rooms"
            label="Rooms"
            
            id="address"
            variant='standard'
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          /><label>BHK</label>
          </div>
          <div style={{display: 'flex', alignItems:'end',justifyContent:'center'}}>
            <TextField
            
            required
            
            name="size"
            label="Size"
            
            id="address"
            variant='standard'
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          /><label>sqft</label>
          </div>
          <br />
            <span style={{color:'red'}}>{errorMessage}</span>
            <br />
            <LoadingButton
          size="small"
          type='submit'
          loading={loader}
          loadingIndicator="Loading..."
          variant="outlined"
        >
          Add Property
        </LoadingButton>
      <br />
        <Button onClick={()=>{navigate('/')}}>Back To Home</Button>
          </Box>
    </Container>
   </>
  )
}

export default CreatePost
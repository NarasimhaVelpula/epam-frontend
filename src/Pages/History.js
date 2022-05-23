import { Alert, Button, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React,{useEffect, useState} from 'react'
import ResponsiveAppBar from '../Components/Appbar'
import axios from '../axios'
import { CircularProgress } from '@mui/material';
import { useNavigate } from "react-router-dom";

function History() {
  const [history,setHistory]=useState([])
  const [loading,setLoading]=useState(true)
  const [noHistory,setNoHistory]=useState(false)
  const navigate=useNavigate()
  const redirectTo=(post)=>{
    navigate(`/post/${post}`)
  }
  useEffect(() => {
    axios.get('history/',{headers:{authtoken: localStorage.getItem('authtoken')}})
    .then(res=>{
      const {data}=res
      console.log(data)
      setHistory(data.history)
      setLoading(false)
      setNoHistory(true)
    })
    .catch(err=>{
      console.log(err)
      setLoading(false)
      setNoHistory(false)
    })
  
    
  }, [])
  
  return (
    <>
      <ResponsiveAppBar />
      <Container>
    {loading?<CircularProgress/> : 
      <Stack sx={{ width: '100%', marginTop:'20px' }} spacing={2}>
      {
        noHistory?history.map(his=>{
          return(
            <Alert
            key={his.post}
            action={
              <Button color="inherit" size="small"
              onClick={()=>{redirectTo(his.post)}}
              >
              Click To view
            </Button>
          }
        >
          {his.type==="Create"?'Created a Property':'Showed Interest to Property'}
        </Alert>
          )
        }):<Typography type='h6'>No History for user</Typography>
      }
     
    </Stack>
}
  </Container>
    </>
  )
}

export default History
import { Alert, Button, Stack } from '@mui/material'
import { Container } from '@mui/system'
import React,{useEffect, useState} from 'react'
import ResponsiveAppBar from '../Components/Appbar'
import axios from '../axios'
import { CircularProgress } from '@mui/material';

function History() {
  const [history,setHistory]=useState([])
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    axios.get('history/',{headers:{authtoken: localStorage.getItem('authtoken')}})
    .then(res=>{
      const {data}=res
      setHistory(data)
      setLoading(false)
    })
    .catch(err=>{
      console.log(err)
      setLoading(false)
    })
  
    
  }, [])
  
  return (
    <>
      <ResponsiveAppBar />
      <Container>
    {loading?<CircularProgress/> :
      <Stack sx={{ width: '100%', marginTop:'20px' }} spacing={2}>
      {
        history.map(his=>{
          return(
            <Alert
            action={
              <Button color="inherit" size="small">
              Click To view
            </Button>
          }
        >
          {his.type==="create"?'Created a Property':'Created a Interest to Property'}
        </Alert>
          )
        })
      }
     
    </Stack>
}
  </Container>
    </>
  )
}

export default History
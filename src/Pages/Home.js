import React, { useEffect, useState } from 'react'
import ResponsiveAppBar from '../Components/Appbar'
import useCheckAuthorized from './useCheckAuthorized'
import Container from '@mui/material/Container';
import Card from '../Components/Card'
import axios from '../axios'
import { CircularProgress } from '@mui/material';

function Home() {
        useCheckAuthorized()
        const [posts, setPosts] = useState([])
        useEffect(()=>{
            axios.get('posts/',{headers:{authtoken: localStorage.getItem('authtoken')}})
            .then(res=>{
                const {data}=res
                setPosts(data)
            })
            .catch(err=>{
                console.log("something is wrong")
            })
        },[])
  return (
    <>
        <ResponsiveAppBar />
        <Container maxWidth="sm">
            {
               posts.length ? posts.map(property=>{
                    return(
                        <Card property={property}  />
                    )
                }): <CircularProgress />
            }
        
      </Container>
    </>
  )
}

export default Home
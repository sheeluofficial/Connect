import { useEffect, useState } from 'react'
import './App.css'
import { Box } from '@chakra-ui/react'
import axios from "axios"
function App() {


  const fetchData  = async ()=>{
    const data = await axios.get("/");
    console.log(data);
  }

  useEffect(()=>{
 fetchData();

  },[]);

  return (
    <>
    <Box color={"red"}>

     <h1>hi</h1>
    </Box>
    </>
  )
}

export default App

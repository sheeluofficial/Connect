import axios from 'axios'
import React from 'react'

const Chatpage =  () => {
   axios.get("/cc").then((data)=>{
    console.log(data)
 }).catch((error)=>{
    console.log(error)
 })

  return (
    <div>Chatpage</div>
  )
}

export default Chatpage
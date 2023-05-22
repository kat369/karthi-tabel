import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Tabel() {
    const {year, issue} = useParams()
    const [tabeldata, settabeldata]= useState([]);
    
  useEffect(()=>{
    loadData()
      
  },[])
   
  let loadData=async ()=>{
    try {
     let tabdata = await axios.get( `http://localhost:5000/files?year=${year}&issue=${issue}`);
 
    console.log(tabdata.data)
    settabeldata(tabdata.data);
    } catch (error) {
     console.log(error)
    }
 }

    
  return (
    <div className="App">
        <div>year-{year}</div>
        <div>issue-{issue}</div>
    {

        //write your map function here with tabeldata
    }
    
</div>
  )
}

export default Tabel
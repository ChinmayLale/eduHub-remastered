import React, { useEffect, useState } from 'react'
import axios from 'axios';


const apiUrl = "https://jsonplaceholder.typicode.com/posts/";

function About() {
  const [data , setData] = useState([]);

  useEffect(()=>{
    axios.get(apiUrl).then(
      (res)=>{
        console.log(res.data);
        setData(res.data);
      }
    )
  },[])



  return (
    <div>
       <h1>Axios Test</h1>
       {data.slice(0,10).map((p)=>{
          const {id ,title , body} = p;
          return <div key={id}>
              <h2>{title}</h2>
              <p>{body}</p><br />
             </div>
       })}
    </div>
  )
}

export default About

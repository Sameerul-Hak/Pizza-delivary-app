import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./homepage.css"
function Homepage() {
  const [userdetails, setUserdetails] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3001/admin/allpizzas")
    .then((res)=>setUserdetails(res.data))
    .catch(err => console.log(err));

      },[])
      console.log(userdetails)
  return (
    <div>
      <h1>home page</h1>
           {userdetails.map(user => (
        <a key={user._id} href={`/detailP/${user._id}`}>
          <div>
            <h3>{user.name}</h3>
            <img width="100px" height="200px" src={`http://localhost:3001/images/` + user.image} alt='images' />
          </div>
        </a>
      ))}
      </div>
  )
}

export default Homepage

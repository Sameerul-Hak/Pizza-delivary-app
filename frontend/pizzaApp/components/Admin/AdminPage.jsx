import React, { useEffect, useState } from 'react'
import "./adminpage.css"
import axios from 'axios'
import DetailPizza from '../DetailPizza/DetailPizza';
import { Link } from 'react-router-dom';

function AdminPage() {
  const [userdetails, setUserdetails] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3001/admin/allpizzas")
    .then((res)=>setUserdetails(res.data))
    .catch(err => console.log(err));

      },[])
      console.log(userdetails)
      return (
        <div>
          <Link to="/createpizzaadmin">create pizza</Link>
           {userdetails.map(user => (
        <a key={user._id} href={`/detailpizza/${user._id}`}>
          <div>
            <h3>{user.name}</h3>
            <img width="100px" height="200px" src={`http://localhost:3001/images/` + user.image} alt='images' />
          </div>
        </a>
      ))}
        </div>
      );
}

export default AdminPage

import React, { useEffect, useState } from 'react'
import "./adminpage.css"
import axios from 'axios'
import DetailPizza from '../DetailPizza/DetailPizza';
import { Link } from 'react-router-dom';
import pizza from './../../assets/images/icons8-pizza-50.png'
import price from './../../assets/images/icons8-price-50.png'
function AdminPage() {
  const [userdetails, setUserdetails] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3001/admin/allpizzas")
    .then((res)=>setUserdetails(res.data))
    .catch(err => console.log(err));

      },[])
      console.log(userdetails)
      return (
        <div className='body-admin'>
          <nav className='nav-admin'>
            <Link className='spl' to="/admin">Admin</Link>
          <Link className='nav-t' to="/myorders">my orders</Link>
          <Link className='nav-t' to="/createpizzaadmin">create pizza</Link>
          </nav>
          <div className='admin-contianer'>
           {userdetails.map(user => (
             <div key={user._id} className='pizza-block'>
            <img className='img-tag' width="100px" height="200px" src={`http://localhost:3001/images/` + user.image} alt='images' />
            <h1 className='name-pizza'  style={{color:"red"}}>{user.name}</h1>
            <h5 style={{marginLeft:"auto",paddingRight:"20px",fontSize:"20px"}}>Type:{user.typeofpizza}</h5>
            <hr className='hrtag' />
            <div className='pqtype'>
            <h3 className='pqh3'><img width={"40px"} style={{position:"relative",left:"15%"}}  src={price}/> <br/>price: <span style={{color:"red",fontSize:"20px"}}>${user.price}</span></h3>
            <h3 className='pqh3'><img width={"40px"} style={{position:"relative",left:"15%"}} src={pizza}/> <br/>quantity:<span style={{color:"red",fontSize:"25px"}}>{user.quantity}</span></h3>
            <h3 className='pqh3'>tags: #{user.tags}</h3>
            </div>
            <h3 className='des'>{user.description}</h3>
            <a key={user._id} href={`/detailpizza/${user._id}`} className='view-details'><h2>veiw details</h2></a>            
          </div>
      ))}</div>
        </div>
      );
}

export default AdminPage

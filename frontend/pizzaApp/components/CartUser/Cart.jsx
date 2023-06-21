import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Cartuser() {
  const history=useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [myorders,setmyorders]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:3001/orders/userorders/${user.name}`).then((res)=>{setmyorders(res.data)}).catch((err)=>{console.log(err)})

  },[])
  const handleclear=(ord)=>{
    console.log(ord._id,ord.username)
    axios.post(`http://localhost:3001/orders/clearorder/${ord._id}/${ord.username}`).then((res)=>{
    history("/menu")
  console.log(res.data.message)})
    .catch((err)=>{console.log(err)})
  }


  return (
    <div>
      <div>
        {myorders.length!== 0 ? (
          myorders.map((ord) => (
            <div key={ord._id} className="pizza-block">
              {/* Render the order's image */}
              <img
                className="img-tag"
                width="100px"
                height="200px"
                src={`http://localhost:3001/images/` + ord.image}
                alt="images"
              />
              <h1 className="name-pizza" style={{ color: 'red' }}>
                {ord.name}
              </h1>
              <h5 style={{ marginRight: 'auto', paddingLeft: '20px', fontSize: '20px' }}>
                Status: {ord.status}
              </h5>
              <h5 style={{ marginLeft: 'auto', paddingRight: '20px', fontSize: '20px' }}>
                Type: {ord.typeofpizza}
              </h5>
              <h4>username: {ord.username}</h4>
              <hr className="hrtag" />
              <div className="pqtype">
                <h3 className="pqh3">Tags: #{ord.tags}</h3>
              </div>
              <h3 className="des">{ord.description}</h3>
              {ord.status ==="delivered" ? <button onClick={()=>handleclear(ord)}>clear</button>:<h1>pay</h1>}
             
            </div>
          ))
        ) : (
          <div><h1>hi {user.name}</h1>
          <h1>your cart is empty, go to the menu and place an order</h1></div>
        )}
        
        {/* <div>
      {myorders.status ==="cancelled"
      ?
      <div>
        <h1>sorry {user.name} your order is cancelled</h1>
      </div>
      :
      <div>
        <h3>hey {user.name} your order is {myorders.status}</h3>
      </div>}
    </div> */}
      </div>
    
    </div>
  );
        }

export default Cartuser;
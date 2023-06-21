import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import price from './../../../assets/images/icons8-price-50.png';
import pizza from './../../../assets/images/icons8-pizza-50.png';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/orders/myorders')
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleStatusChange = (event, orderId) => {
    const status = event.target.value;

    // Call your API endpoint with the selected status and order ID
    axios
      .post(`http://localhost:3001/orders/statuschange/${status}/${orderId}`)
      .then((res) => {
        // Handle the response or update the state as needed
        console.log(res.data);

        // Update the status of the specific order in the state
        setOrders(prevOrders => {
          const updatedOrders = prevOrders.map(order => {
            if (order._id === orderId) {
              return { ...order, status };
            }
            return order;
          });
          return updatedOrders;
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="body-admin">
      <nav className="nav-admin">
        <Link className="spl" to="/admin">
          Admin
        </Link>
        <Link className="nav-t" to="/createpizzaadmin">
          Create Pizza
        </Link>
      </nav>
      <div className="admin-contianer">
        {orders.map((ord) => (
          <div key={ord._id} className="pizza-block">
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
            <hr className="hrtag" />
            <div className="pqtype">
              <h3 className="pqh3">
                <img width="40px" style={{ position: 'relative', left: '15%' }} src={price} />
                <br />
                Price: <span style={{ color: 'red', fontSize: '20px' }}>${ord.price}</span>
              </h3>
              <h3 className="pqh3">
                <img width="40px" style={{ position: 'relative', left: '15%' }} src={pizza} />
                <br />
                Quantity: <span style={{ color: 'red', fontSize: '25px' }}>{ord.quantity}</span>
              </h3>
              <h3 className="pqh3">Tags: #{ord.tags}</h3>
            </div>
            <h3 className="des">{ord.description}</h3>

            <div>
              <select
                id="status"
                value={ord.status}
                onChange={(event) => handleStatusChange(event, ord._id)}
              >
                <option value="">{ord.status}</option>
                <option value="accepted">Accepted</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;

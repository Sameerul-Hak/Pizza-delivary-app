import React, { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { AdminAuthContext } from '../Admin/AdminAuthContext';
import './detailpizza.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function DetailPizza() {
  const [detailpizza, setDetailPizza] = useState(null);
  const { id } = useParams();
  const history = useNavigate();
  const { isadminauth } = useContext(AdminAuthContext);
console.log(isadminauth,"from detail")
  const handleedit=()=>{
    // <Route path="/edit-pizza/:id" component={EditPizzaForm} />
    history(`/edit-pizza/${id}`);

  }
  const handledelete=()=>{
    axios
    .delete(`http://localhost:3001/admin/detailpizzaadmin/${id}`)
    .then(() => {
      history('/admin');
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3001/admin/detailpizzaadmin/${id}`)
      .then((res) => setDetailPizza(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!detailpizza) {
    return <p>Loading...</p>;
  }

  return (
    <div className='detail_card'>
      <div className="detail_card_container">
        <div className="card_img">
          {/* <link className='nav-to'to='/admin' ><FontAwesomeIcon icon={faTimes} /></link> */}
          <h2>Pizza Details</h2>
          <img src={`http://localhost:3001/images/${detailpizza.image}`} alt={detailpizza.name} /> 
        </div>
        <div className="card_content">
          <div className="card_pizza_name">
            <h3>{detailpizza.name}</h3>
          </div>
          <div className="card_details">
            <p>{detailpizza.description}</p>
            <p>Price: ${detailpizza.price}</p>
            <p>Quantity: {detailpizza.quantity}</p>
            <p>Base: {detailpizza.base}</p>
            <p>Sauce: {detailpizza.sauce}</p>
            <p>Size: {detailpizza.size}</p>
            <p>Toppings: {detailpizza.toppings}</p>
            <p>Type of Pizza: {detailpizza.typeofpizza}</p>
            <p>Tags: {detailpizza.tags}</p>
            <p>Discount: {detailpizza.discount}</p>
            <p>status: {detailpizza.status}</p>
          </div>
          <div className="detail_footer">
            <button onClick={handleedit}>edit</button>
            <button onClick={handledelete}>delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPizza;

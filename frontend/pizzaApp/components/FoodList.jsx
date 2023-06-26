import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiArrowRight, FiShoppingCart } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';


function FoodList() {
  const history=useNavigate()
  const user = JSON.parse(localStorage.getItem('user'));
  const [message,setmessage]=useState("")

  console.log(user.name)
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/admin/allpizzas");
      setFoods(response.data);
    } catch (error) {
      console.error('Error fetching food data:', error);
    }
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gridGap: '20px',
    marginTop: '20px',
  };

  const foodItemStyle = {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
  };

  const foodItemImageStyle = {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '10px',
  };

  const foodItemNameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const foodItemDescriptionStyle = {
    fontSize: '14px',
    marginBottom: '10px',
    color: '#666',
  };

  const foodItemPriceStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#ff5722',
  };

  const buttonStyle = {
    backgroundColor: '#ff5722',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '8px 12px',
    margin: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    display: 'flex',
    alignItems: 'center',
  };

  const buttonIconStyle = {
    marginRight: '5px',
  };

  const { id } = useParams();

  const navigate = useNavigate();

  const handleFoodItemClick = (food) => {
    // Handle click event for a food item
     ;
  };

  const handleViewMoreClick = (food) => {
    // Handle click event for the "View More" button
    navigate(`/singlepizza/${food._id}`);
  };

  const handlePlaceOrderClick = (food) => {
    
    let d={
      username:user.name,
      name: food.name,
      description: food.description,
      quantity: food.quantity,
      tags: food.tags,
      price: food.price,
      size: food.size,
      toppings: food.toppings,
      discount: food.discount,
      typeofpizza: food.typeofpizza,
      base: food.base,
      sauce: food.sauce,
      image:food.image
    }
   

    axios
  .post(`http://localhost:3001/orders/createorder/${user.name}`, d)
  .then((response) => {
    if (response.data.message === "error") {
      setmessage("You have already placed this order");
      setTimeout(() => {
        setmessage("");
        navigate("/menu");
      }, 3000); 
    } else {
      setmessage(response.data.message);
      setTimeout(() => {
        setmessage("");
        navigate("/menu");
      }, 3000);
    }
  })
  .catch((error) => {
    console.error(error);
  });

  };

  return (
<div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Food List</h2>
        <Link to="/usercart" style={{ textDecoration: 'none', color: '#000' }}>
          <button style={buttonStyle}>
            <FiShoppingCart size={20} style={buttonIconStyle} />
            View Cart
          </button>
        </Link>
      </div >
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        {message && <h1 style={{backgroundColor:"#90EE90",width:"fit-content",padding:"7px",borderRadius:"10px",textTransform:"capitalize",position:"sticky",top:"30%"}} >{message} ✅</h1>}
      </div>
      <div style={gridContainerStyle}>
        {foods.map((food) => (
          <div key={food._id} style={foodItemStyle} onClick={() => handleFoodItemClick(food)}>
            <img src={`http://localhost:3001/images/` + food.image} alt={food.name} style={foodItemImageStyle} />
            <h3 style={foodItemNameStyle}>{food.name}</h3>
            <p style={foodItemDescriptionStyle}>{food.description}</p>
            <p style={foodItemPriceStyle}>Price: ${food.price}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button style={buttonStyle} onClick={() => handleViewMoreClick(food)}>
                <FiArrowRight size={16} style={buttonIconStyle} />
                View More
              </button>
              <button style={buttonStyle} onClick={() => handlePlaceOrderClick(food)}>
                <FiShoppingCart size={16} style={buttonIconStyle} />
                Place Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodList;

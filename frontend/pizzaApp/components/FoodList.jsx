import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';


function FoodList() {
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
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
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
  };

  const { id } = useParams();

  const navigate = useNavigate();

  const handleFoodItemClick = (food) => {
    // Handle click event for a food item
     navigate(`/singlepizza/${food._id}`);
  };

  const handleViewMoreClick = (food) => {
    // Handle click event for the "View More" button
    console.log('View More:', food);
  };

  const handlePlaceOrderClick = (food) => {
    console.log("placed:",food);
  };

  return (
    <div>
      <h2>Food List</h2>
      <div style={gridContainerStyle}>
        {foods.map((food) => (
          <div
            key={food._id}
            style={foodItemStyle}
            onClick={() => handleFoodItemClick(food)}
          >
            <img
              src={food.image}
              alt={food.name}
              style={foodItemImageStyle}
            />
            <h3 style={foodItemNameStyle}>{food.name}</h3>
            <p style={foodItemDescriptionStyle}>{food.description}</p>
            <p style={foodItemPriceStyle}>Price: ${food.price}</p>
            <button style={buttonStyle} onClick={() => handleViewMoreClick(food)}>View More</button>
            <button style={buttonStyle} onClick={() => handlePlaceOrderClick(food)}>Place Order</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodList;

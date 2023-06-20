import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function PizzaDetails() {
  const [pizza, setPizza] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/admin/detailpizzaadmin/${id}`)
      .then((res) => setPizza(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const imageUrl = pizza ? `http://localhost:3001/images/${pizza.image}` : '';

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage:`url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const detailsContainerStyle = {
    width: '80%',
    maxWidth: '1000px',
    padding: '40px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    transform: 'scale(1)',
    ':hover': {
      transform: 'scale(1.02)',
    },
  };

  const imageStyle = {
    width: '100%',
    height:"400px",
    marginBottom: '20px',
    borderRadius: '10px',
  };

  const titleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  };

  const descriptionStyle = {
    fontSize: '18px',
    marginBottom: '20px',
    color: '#555',
  };

  const infoItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
    color: '#777',
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginRight: '10px',
    color: '#333',
  };

  const valueStyle = {
    color: '#555',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px',
  };

  const buttonStyle = {
    padding: '15px 30px',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
    ':hover': {
      backgroundColor: '#0056b3',
    },
  };

  const backButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#6c757d',
    ':hover': {
      backgroundColor: '#4e555a',
    },
  };

  const handlePlaceOrder = () => {
    // Handle placing an order logic here
    
  };

  const handleGoBack = () => {
    navigate('/menu'); 
  };

  return (
    <div style={containerStyle}>
      {pizza ? (
        <div style={detailsContainerStyle}>
          <img src={"http://localhost:3001/images/"+pizza.image} alt={pizza.name} style={imageStyle} />
          <h2 style={titleStyle}>{pizza.name}</h2>
          <p style={descriptionStyle}>{pizza.description}</p>
          <div style={infoItemStyle}>
            <span style={labelStyle}>Price:</span>
            <span style={valueStyle}>${pizza.price}</span>
          </div>
          <div style={infoItemStyle}>
            <span style={labelStyle}>Quantity:</span>
            <span style={valueStyle}>{pizza.quantity}</span>
          </div>
          <div style={infoItemStyle}>
            <span style={labelStyle}>Size:</span>
            <span style={valueStyle}>{pizza.size}</span>
          </div>
          <div style={infoItemStyle}>
            <span style={labelStyle}>Toppings:</span>
            <span style={valueStyle}>{pizza.toppings}</span>
          </div>
          <div style={infoItemStyle}>
            <span style={labelStyle}>Type of Pizza:</span>
            <span style={valueStyle}>{pizza.typeofpizza}</span>
          </div>
          <div style={infoItemStyle}>
            <span style={labelStyle}>Base:</span>
            <span style={valueStyle}>{pizza.base}</span>
          </div>
          <div style={infoItemStyle}>
            <span style={labelStyle}>Sauce:</span>
            <span style={valueStyle}>{pizza.sauce}</span>
          </div>
          <div style={infoItemStyle}>
            <span style={labelStyle}>Status:</span>
            <span style={valueStyle}>{pizza.status}</span>
          </div>
          <div style={buttonContainerStyle}>
            <button style={buttonStyle} onClick={handlePlaceOrder}>
              Place Order
            </button>
            <button style={backButtonStyle} onClick={handleGoBack}>
              Go Back
            </button>
          </div>
        </div>
      ) : (
        <p>Loading pizza details...</p>
      )}
    </div>
  );
}

export default PizzaDetails;

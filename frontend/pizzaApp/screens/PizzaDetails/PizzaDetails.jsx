import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PizzaDetails() {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/admin/detailpizzaadmin/${id}');
      setPizza(response.data);
    } catch (error) {
      console.error('Error fetching pizza data:', error);
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const detailsContainerStyle = {
    maxWidth: '800px',
    padding: '40px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const imageStyle = {
    width: '100%',
    marginBottom: '20px',
    borderRadius: '5px',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    fontSize: '16px',
    marginBottom: '20px',
  };

  const infoItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  };

  const labelStyle = {
    fontWeight: 'bold',
  };

  const valueStyle = {
    marginLeft: '10px',
  };

  return (
    <div style={containerStyle}>
      {pizza ? (
        <div style={detailsContainerStyle}>
          <img src={pizza.image} alt={pizza.name} style={imageStyle} />
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
        </div>
      ) : (
        <p>Loading pizza details...</p>
      )}
    </div>
  );
}

export default PizzaDetails;

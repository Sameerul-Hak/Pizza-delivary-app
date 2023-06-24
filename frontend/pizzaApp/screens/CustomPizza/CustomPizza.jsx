import React, { useState } from 'react';
import axios from 'axios';

const CustomPizzaPage = () => {
  const [selectedBase, setSelectedBase] = useState('');
  const [selectedSauce, setSelectedSauce] = useState('');
  const [selectedCheese, setSelectedCheese] = useState('');
  const [selectedVeggies, setSelectedVeggies] = useState([]);

  const baseOptions = ['Thin Crust', 'Thick Crust', 'Whole Wheat', 'Gluten-Free', 'Cauliflower Crust'];
  const sauceOptions = ['Marinara', 'Alfredo', 'Pesto', 'BBQ', 'Garlic Butter'];
  const cheeseOptions = ['Mozzarella', 'Cheddar', 'Parmesan', 'Gouda', 'Feta'];
  const veggieOptions = ['Tomatoes', 'Onions', 'Bell Peppers', 'Mushrooms', 'Olives', 'Spinach', 'Pineapple'];

  const handleBaseSelection = (base) => {
    setSelectedBase(base);
  };

  const handleSauceSelection = (sauce) => {
    setSelectedSauce(sauce);
  };

  const handleCheeseSelection = (cheese) => {
    setSelectedCheese(cheese);
  };

  const handleVeggieSelection = (veggie) => {
    if (selectedVeggies.includes(veggie)) {
      setSelectedVeggies(selectedVeggies.filter((item) => item !== veggie));
    } else {
      setSelectedVeggies([...selectedVeggies, veggie]);
    }
  };

  const renderOptions = (options, selectedOption, handleSelection) => {
    return (
      <ul style={styles.optionsContainer}>
        {options.map((option) => (
          <li key={option} style={styles.optionItem}>
            <label style={styles.optionLabel}>
              <input
                type="checkbox"
                checked={selectedOption === option}
                onChange={() => handleSelection(option)}
                style={styles.optionCheckbox}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    );
  };

  const handleOrder = () => {
    // Implement order functionality
    const customizedPizza = {
      base: selectedBase,
      sauce: selectedSauce,
      cheese: selectedCheese,
      veggies: selectedVeggies,
    };
    console.log('Pizza ordered!',customizedPizza);
    axios
      .post('http://localhost:3001/user/custompizza', customizedPizza)
      .then((response) => {
        console.log('Pizza ordered!', response.data);
        // Reset the form or show a success message
      })
      .catch((error) => {
        console.error('An error occurred while ordering the pizza.', error);
        // Show an error message to the user
      });
  };


  

  const handleCancel = () => {
    // Implement cancel functionality
    setSelectedBase('');
    setSelectedSauce('');
    setSelectedCheese('');
    setSelectedVeggies([]);
  };

  return (
    <div style={styles.topcontainer}>
    <div style={styles.container}>
      <h2 style={styles.heading}>Customize Your Pizza</h2>

      <div style={styles.choiceGrid}>
        <div style={styles.choiceContainer}>
          <h3 style={styles.choiceHeading}>Select Pizza Base:</h3>
          {renderOptions(baseOptions, selectedBase, handleBaseSelection)}
        </div>

        <div style={styles.choiceContainer}>
          <h3 style={styles.choiceHeading}>Select Sauce:</h3>
          {renderOptions(sauceOptions, selectedSauce, handleSauceSelection)}
        </div>

        <div style={styles.choiceContainer}>
          <h3 style={styles.choiceHeading}>Select Cheese:</h3>
          {renderOptions(cheeseOptions, selectedCheese, handleCheeseSelection)}
        </div>

        <div style={styles.choiceContainer}>
          <h3 style={styles.choiceHeading}>Select Veggies:</h3>
          {veggieOptions.map((veggie) => (
            <label key={veggie} style={styles.optionLabel}>
              <input
                type="checkbox"
                checked={selectedVeggies.includes(veggie)}
                onChange={() => handleVeggieSelection(veggie)}
                style={styles.optionCheckbox}
              />
              {veggie}
            </label>
          ))}
        </div>
      </div>

      <div style={styles.buttonsContainer}>
        <button style={styles.button} onClick={handleOrder}>Order</button>
        <button style={styles.button} onClick={handleCancel}>Cancel</button>
      </div>

      <div style={styles.summaryContainer}>
        <h3 style={styles.summaryHeading}>Selected Pizza Configuration:</h3>
        <p>Base: {selectedBase}</p>
        <p>Sauce: {selectedSauce}</p>
        <p>Cheese: {selectedCheese}</p>
        <p>Veggies: {selectedVeggies.join(', ')}</p>
      </div>
    </div>
    </div>
  );
};

const styles = {
  topcontainer : {
    backgroundImage:'url("../../assets/images/entrybg.jpeg")',
    backgroundSize:"cover"
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    fontSize:"60px",
    fontWeight:"bolder",
    color:"red"
  },
  choiceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '30px',
  },
  choiceContainer: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundOpacity:"1"

  },
  choiceHeading: {
    marginBottom: '10px',
    color: 'white',
    fontSize: '18px',
  },
  optionsContainer: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  optionItem: {
    marginBottom: '10px',
  },
  optionLabel: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    color:"white"
  },
  optionCheckbox: {
    marginRight: '5px',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  button: {
    backgroundColor: '#FF6F61',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
    transition: 'background-color 0.3s ease',
  },
  // button:hover: {
  //   backgroundColor: '#DB524D',
  // },
  summaryContainer: {
    textAlign: 'center',
    marginTop: '40px',
    padding: '20px',
    backgroundColor: 'rgba(0,0,0,0.6',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    color:"white"
  },
  summaryHeading: {
    color: 'white',
    marginBottom: '20px',
  },
};

export default CustomPizzaPage;

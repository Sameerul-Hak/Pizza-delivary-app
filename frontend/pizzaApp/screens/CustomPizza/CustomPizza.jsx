import React, { useState } from 'react';

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
      <ul>
        {options.map((option) => (
          <li key={option}>
            <label>
              <input
                type="checkbox"
                checked={selectedOption === option}
                onChange={() => handleSelection(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h2>Customize Your Pizza</h2>

      <div>
        <h3>Select Pizza Base:</h3>
        {renderOptions(baseOptions, selectedBase, handleBaseSelection)}
      </div>

      <div>
        <h3>Select Sauce:</h3>
        {renderOptions(sauceOptions, selectedSauce, handleSauceSelection)}
      </div>

      <div>
        <h3>Select Cheese:</h3>
        {renderOptions(cheeseOptions, selectedCheese, handleCheeseSelection)}
      </div>

      <div>
        <h3>Select Veggies:</h3>
        {veggieOptions.map((veggie) => (
          <label key={veggie}>
            <input
              type="checkbox"
              checked={selectedVeggies.includes(veggie)}
              onChange={() => handleVeggieSelection(veggie)}
            />
            {veggie}
          </label>
        ))}
      </div>

      <h3>Selected Pizza Configuration:</h3>
      <p>Base: {selectedBase}</p>
      <p>Sauce: {selectedSauce}</p>
      <p>Cheese: {selectedCheese}</p>
      <p>Veggies: {selectedVeggies.join(', ')}</p>
    </div>
  );
};

export default CustomPizzaPage;

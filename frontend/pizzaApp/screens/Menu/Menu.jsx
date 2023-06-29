import React, { useState } from 'react';
import FoodList from '../../components/FoodList';
import { FiFilter, FiSearch, FiClock, FiArrowUp, FiArrowDown } from 'react-icons/fi';
import Navbar from '../../components/Navbar';

const Menu = () => {
  const [sortOrder, setSortOrder] = useState('ascending');
  const [filterActive, setFilterActive] = useState(false);

  const handleRecent = () => {
    // Perform recent operation
    console.log('Display recent items');
  };

  const handleSortAscending = () => {
    // Sort in ascending order
    setSortOrder('ascending');
    console.log('Sort in ascending order');
  };

  const handleSortDescending = () => {
    // Sort in descending order
    setSortOrder('descending');
    console.log('Sort in descending order');
  };

  const handleFilter = () => {
    // Toggle filter active state
    setFilterActive(!filterActive);
    console.log('Toggle filter:', !filterActive);
  };

  return (
    <>
      <Navbar />
      
      <div style={styles.container}>
        
        <div style={styles.leftSidebar}>
          <div style={styles.section}>
            <h3 style={styles.title}>Filter</h3>
            <button style={styles.button} onClick={handleFilter}>
              <FiFilter style={styles.icon} />
              {filterActive ? 'Remove Filter' : 'Apply Filter'}
            </button>
          </div>
          <div style={styles.section}>
            <h3 style={styles.title}>Sort</h3>
            <button
              style={styles.button}
              onClick={handleSortAscending}
              disabled={sortOrder === 'ascending'}
            >
              <FiArrowUp style={styles.icon} />
              Sort Ascending
            </button>
            <button
              style={styles.button}
              onClick={handleSortDescending}
              disabled={sortOrder === 'descending'}
            >
              <FiArrowDown style={styles.icon} />
              Sort Descending
            </button>
          </div>
        </div>
        <div style={styles.content}>
        <FoodList />
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
  },

  // leftSidebar: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   marginBottom: '20px',
  // },
  section: {
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#f2f2f2',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    flex:'2',
    margin:'40px',
    padding:'10px',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
    backgroundColor: '#ffcc00',
    borderRadius: '8px',
    border: 'none',
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  icon: {
    marginRight: '8px',
  },
};

export default Menu;

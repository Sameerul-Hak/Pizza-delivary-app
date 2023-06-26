import React from 'react';
import FoodList from '../../components/FoodList';
import { FiFilter, FiSearch, FiClock, FiArrowUp, FiArrowDown } from 'react-icons/fi';
import Navbar from '../../components/Navbar';


const Menu = () => {
  return (
    <>
      <Navbar/>
   
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div style={styles.section}>
          <h3 style={styles.title}>Filter</h3>
          <button style={styles.button}>
            <FiFilter style={styles.icon} />
            Filter
          </button>
        </div>
        <div style={styles.section}>
          <h3 style={styles.title}>Sort</h3>
          <button style={styles.button}>
            <FiArrowUp style={styles.icon} />
            Sort Ascending
          </button>
          <button style={styles.button}>
            <FiArrowDown style={styles.icon} />
            Sort Descending
          </button>
        </div>
      </div>
      <div style={styles.content}>
        <FoodList />
      </div>
      <div style={styles.sidebar}>
        <div style={styles.section}>
          <h3 style={styles.title}>Search</h3>
          <button style={styles.button}>
            <FiSearch style={styles.icon} />
            Search
          </button>
        </div>
        <div style={styles.section}>
          <h3 style={styles.title}>Recent</h3>
          <button style={styles.button}>
            <FiClock style={styles.icon} />
            Recent
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '100vh',
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '40px',
    marginLeft: '40px',
  },
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
    flex: 1,
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

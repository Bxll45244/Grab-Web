import axios from 'axios';

const fetchRestaurants = async () => {
    try {
      const response = await fetch('/db.json');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  fetchRestaurants();
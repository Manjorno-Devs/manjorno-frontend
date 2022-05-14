import Header from '../../Layout/Header/Header.js';
import axios from 'axios';
import { useEffect, useState } from 'react';

import RestaurantSearch from './components/RestaurantsSearch.js';
import RestaurantRegexSearchPage from './components/RestaurantsRegexSearchPage.js';
import RestaurantPage from './components/RestaurantPage.js';
import './HomePage.css';
import { Image } from '@mui/icons-material';

const HomePage = () => {

  const [axiosError, setAxiosError] = useState(false);
  const [searchQuery, setSearchQuery] = useState();
  const [restaurants, setRestaurants] = useState([]);

  const [searchType, setSearchType] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState();

  useEffect(() => {
  }, [setRestaurants]);
  const textFieldChangeHandler = (e) => {
    e.preventDefault();
    if (searchType === "direct") {
      setSearchQuery(e.target.innerHTML);
      console.log(searchQuery);
    } else {
      setSearchQuery(e.target.value);
    }
  }
  const restaurantSearchHandler = (e) => {
    e.preventDefault();
    axios.get(`${process.env.REACT_APP_API_URL}/restaurants/find`, { params: { name: searchQuery } })
      .then(response => {
        setRestaurants(response.data.response);
      })
      .catch(error => {
        setAxiosError(error);
      });
  }


  return (
    <div style={{ overflow: 'hidden' }}>
      <Header axiosError={axiosError} axiosErrorSetter={setAxiosError} />
      {
        
        {
          
          "": <RestaurantSearch setSelectedRestaurant={setSelectedRestaurant} restaurants={restaurants} restaurantSearchHandler={restaurantSearchHandler} textFieldChangeHandler={textFieldChangeHandler} setSearchType={setSearchType} />,
          "regex": <RestaurantRegexSearchPage restaurants={restaurants} />,
          "direct": <RestaurantPage selectedRestaurant={selectedRestaurant} restaurants={restaurants} searchQuery={searchQuery}/>
        }[searchType]
        
      }

    </div>
  );
}

export default HomePage;

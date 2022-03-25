import MainPageCustomer from './components/CustomerSide/MainPage.js';
import MainPageBusiness from './components/BusinessSide/MainPage.js'
import RestaurantManagement from './components/BusinessSide/Management/RestaurantManagement.js';
import RegisterBusiness from './components/BusinessSide/BusinessSelector/RegisterBusiness.js';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { KeycloakProvider } from './components/Axios&Keycloak/KeycloakProvider.js';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<KeycloakProvider />}>
          <Route path="/" element={<MainPageCustomer />} />
          <Route path="business" element={<MainPageBusiness />} />
          <Route path="restaurantManagement" element={<RestaurantManagement />} />
          <Route path='businessCreate' element={<RegisterBusiness />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

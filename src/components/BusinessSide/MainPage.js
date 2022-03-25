import IFNoBusinessRegistered from "./BusinessSelector/IFNoBusinessRegistered.js";
import BusinessSelector from "./BusinessSelector/BusinessSelector.js";
import Header from "../Layout/Header/Header.js"
import jwt_decode from 'jwt-decode';
import useAxiosKeycloak from '../Axios&Keycloak/useAxiosKeyCloak.js';
import KeycloakContext from "../Axios&Keycloak/KeycloakProvider.js";

import { useEffect, useState, useContext } from "react";

const MainPage = (props) => {

    const auth = useContext(KeycloakContext);
    const token = jwt_decode(auth.token);
    const keycloak = auth.keycloak;

    const axios = useAxiosKeycloak();

    const [restaurants, setRestaurants] = useState([]);
    const [axiosError, setAxiosError] = useState();


    useEffect(() => {
        const userId = token.sub;
        axios.get(`${process.env.REACT_APP_API_URL}/restaurants/employees/find`, {
            params: { userId }
        })
            .then(response => setRestaurants(response.data))
            .catch(err => setAxiosError(err.response.data));
    }, [])

    console.log(restaurants);

    return (
        <div>
            <Header axiosError={axiosError} axiosErrorSetter={setAxiosError} />
            {
                {
                    true: <IFNoBusinessRegistered />,
                    false: <BusinessSelector restaurants={restaurants} />
                }[restaurants.length === 0]
            }

        </div>
    );
}

export default MainPage;
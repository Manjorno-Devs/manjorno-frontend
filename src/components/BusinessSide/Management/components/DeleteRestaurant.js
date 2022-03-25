import { useContext, useEffect, useState } from "react";
import { useLocation, useSearchParam, useNavigate } from "react-router-dom";
import { Button } from '@mui/material';

import useAxiosKeycloak from "../../../Axios&Keycloak/useAxiosKeyCloak.js";
import KeycloakContext from "../../../Axios&Keycloak/KeycloakProvider.js";

const DeleteRestaurant = (props) => {

    const navigate = useNavigate();
    const auth = useContext(KeycloakContext);

    const axios = useAxiosKeycloak();

    const [axiosError, setAxiosError] = useState();

    const deleteRestaurant = event => {
        event.preventDefault();
        axios.delete(`${process.env.REACT_APP_API_URL}/restaurants/delete`, { params: {id: props.restaurant._id} })
            .then(response => navigate('/business'))
            .catch(err => auth.keycloak.logout());
    }
    
    return (
        <div>
            <Button onClick={deleteRestaurant}>Delete</Button>
        </div>
    );
}

export default DeleteRestaurant;
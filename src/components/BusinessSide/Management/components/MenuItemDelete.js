import { useContext, useEffect, useState } from "react";
import { Typography, Box, InputLabel, Input, Button } from '@mui/material';

import useAxiosKeycloak from "../../../Axios&Keycloak/useAxiosKeyCloak.js";
import KeycloakContext from "../../../Axios&Keycloak/KeycloakProvider.js";


const MenuItemDelete = (props) => {


    const axios = useAxiosKeycloak();

    const deleteItemHandler = event => {
        event.preventDefault();
        console.log(props.selectedItem);
        axios.delete(`${process.env.REACT_APP_API_URL}/restaurants/menu/delete`, { params: { id: props.selectedItem.id } })
            .then(response => window.location.reload())
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Button style={{ margin: '0 auto', display: "flex" }} onClick={deleteItemHandler}>Delete Item</Button>
        </div>
    );
}

export default MenuItemDelete;
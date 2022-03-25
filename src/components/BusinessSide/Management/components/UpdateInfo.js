import { useContext, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Grid, Typography, Box, InputLabel, Input, Button } from '@mui/material';

import useAxiosKeycloak from "../../../Axios&Keycloak/useAxiosKeyCloak.js";
import KeycloakContext from "../../../Axios&Keycloak/KeycloakProvider.js";

const UpdateInfo = (props) => {

    const auth = useContext(KeycloakContext);

    const axios = useAxiosKeycloak();

    const [axiosError, setAxiosError] = useState();

    const [name, setName] = useState();
    const [locationLink, setLocationLink] = useState();
    const [contacts, setContacts] = useState();

    const updateRestaurantInfo = event => {
        event.preventDefault();
        axios.put(`${process.env.REACT_APP_API_URL}/restaurants/update`, {name, locationLink, contacts}, { params: {id: props.restaurant._id} })
            .then(response => window.location.reload())
            .catch(err => auth.keycloak.logout());
    }

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection='column'
        >
            <Typography variant="h6">Update restaurant info</Typography>
            <form onSubmit={updateRestaurantInfo}>
                <InputLabel>Name</InputLabel>
                <Input id="name" onChange={event => setName(event.target.value)} />

                <InputLabel>LocationLink</InputLabel>
                <Input id="locationLink" onChange={event => setLocationLink(event.target.value)} />

                <InputLabel>Phone</InputLabel>
                <Input id="phone" onChange={event => setContacts({ "Phone": event.target.value })} />

                <Button style={{ margin: '0 auto', display: "flex" }} type="submit">Update Restaurant</Button>
            </form>
        </Box>
    );

}

export default UpdateInfo;
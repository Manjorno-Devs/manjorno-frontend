import useAxiosKeycloak from "../../Axios&Keycloak/useAxiosKeyCloak.js";
import KeycloakContext from "../../Axios&Keycloak/KeycloakProvider.js";
import Header from "../../Layout/Header/Header.js";

import { Grid, Box, InputLabel, Input, Button } from '@mui/material';
import { useContext, useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';
import { Navigate } from 'react-router-dom'

const RegisterBusiness = (props) => {
    const auth = useContext(KeycloakContext);
    const token = jwt_decode(auth.token);
    const keycloak = auth.keycloak;

    const axios = useAxiosKeycloak();

    const [name, setName] = useState();
    const [locationLink, setLocationLink] = useState();
    const [contacts, setContacts] = useState();

    // useEffect(() => {
    //     
    // }, [])

    const restaurantRegisterHandler = event => {
        event.preventDefault();
        console.log("Kur");
        axios.post(`${process.env.REACT_APP_API_URL}/restaurants/create`, { name, locationLink, contacts })
            .then(response => <Navigate to='/business' />)
            .catch(err => console.log(err.response));
    }


    return (
        <div>
            <Header axiosError={null} setAxiosError={null} />
            <Grid
                container
                spacing={0}
                z-index="0"
                direction="column"
                alignItems="center"
                position="relative"
                justifyContent="center"
                top="0"
                style={{ minHeight: '100vh' }}
            >
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection='column'
                >
                    <form onSubmit={e => restaurantRegisterHandler(e)}>
                        <InputLabel>Name</InputLabel>
                        <Input id="name" onChange={event => setName(event.target.value)} />

                        <InputLabel>LocationLink</InputLabel>
                        <Input id="locationLink" onChange={event => setLocationLink(event.target.value)} />

                        <InputLabel>Phone</InputLabel>
                        <Input id="phone" onChange={event => setContacts({"Phone": event.target.value})} />

                        <Button style={{ margin: '0 auto', display: "flex" }} type="submit">Register Restaurant</Button>
                    </form>
                </Box>
            </Grid>
        </div>
    );
}

export default RegisterBusiness;
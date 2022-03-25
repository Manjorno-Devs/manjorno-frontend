import { useContext, useEffect, useState } from "react";
import { Typography, Box, InputLabel, Input, Button } from '@mui/material';

import useAxiosKeycloak from "../../../Axios&Keycloak/useAxiosKeyCloak.js";
import KeycloakContext from "../../../Axios&Keycloak/KeycloakProvider.js";


const MenuItemAdd = (props) => {

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();


    const axios = useAxiosKeycloak();

    const menuItemAddHandler = event => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/restaurants/menu/add`, {name, description, price}, { params: {restaurantId: props.restaurant._id} })
            .then(response => window.location.reload())
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection='column'
            >
                <Typography variant="h6">Add Menu Item</Typography>
                <form onSubmit={menuItemAddHandler}>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection='rows'
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexDirection='column'
                        >
                            <InputLabel>Name</InputLabel>
                            <Input id="name" onChange={event => setName(event.target.value)} />
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexDirection='column'
                        >
                            <InputLabel>Description</InputLabel>
                            <Input id="description" onChange={event => setDescription(event.target.value)} />
                        </Box>

                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexDirection='column'
                        >
                            <InputLabel>Price</InputLabel>
                            <Input id="price" onChange={event => setPrice(event.target.value)} />
                        </Box>
                    </Box>
                    <Button style={{ margin: '0 auto', display: "flex" }} type="submit">Add Item</Button>
                </form>
            </Box>
        </div>
    );
}

export default MenuItemAdd;
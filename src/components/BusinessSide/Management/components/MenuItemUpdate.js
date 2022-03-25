import { useContext, useEffect, useState } from "react";
import { Typography, Box, InputLabel, Input, Button } from '@mui/material';

import useAxiosKeycloak from "../../../Axios&Keycloak/useAxiosKeyCloak.js";
import KeycloakContext from "../../../Axios&Keycloak/KeycloakProvider.js";


const MenuItemUpdate = (props) => {

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();


    const axios = useAxiosKeycloak();

    const updateItemHandler = event => {
        event.preventDefault();
        axios.put(`${process.env.REACT_APP_API_URL}/restaurants/menu/update`, { name, description, price }, { params: { id: props.selectedItem.id } })
            .then(response => window.location.reload())
            .catch(err => console.log(err));
    }

    console.log(props.selectedItem);

    return (
        <div>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection='column'
            >
                <Typography variant="h6">Update Menu Item</Typography>
                <form onSubmit={updateItemHandler}>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection='rows'
                    >
                        <h6></h6>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexDirection='column'
                        >
                            <InputLabel>Name</InputLabel>
                            <Input id="name" placeholder={props.selectedItem ? props.selectedItem.name : undefined} onChange={event => setName(event.target.value)} />
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexDirection='column'
                        >
                            <InputLabel>Description</InputLabel>
                            <Input id="description" placeholder={props.selectedItem ? props.selectedItem.description : undefined} onChange={event => setDescription(event.target.value)} />
                        </Box>

                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexDirection='column'
                        >
                            <InputLabel>Price</InputLabel>
                            <Input id="price" placeholder={props.selectedItem ? props.selectedItem.price : undefined} onChange={event => setPrice(event.target.value)} />
                        </Box>
                    </Box>
                    <Button style={{ margin: '0 auto', display: "flex" }} type="submit">Update Item</Button>
                </form>
            </Box>
        </div>
    );
}

export default MenuItemUpdate;
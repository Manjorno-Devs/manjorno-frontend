import { useContext, useEffect, useState } from "react";
import { Typography, Box, InputLabel, Input, Button } from '@mui/material';

import useAxiosKeycloak from "../../../Axios&Keycloak/useAxiosKeyCloak.js";
import KeycloakContext from "../../../Axios&Keycloak/KeycloakProvider.js";


const EmployeesAdd = (props) => {


    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();

    return (
        <div>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection='column'
            >
                <Typography variant="h6">Add Employee</Typography>
                <form onSubmit={null}>
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

export default EmployeesAdd;
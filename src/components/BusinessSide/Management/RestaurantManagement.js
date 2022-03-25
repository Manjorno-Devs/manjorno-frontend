import { useContext, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Grid, Typography, Box, InputLabel, Input, Button } from '@mui/material';

import useAxiosKeycloak from "../../Axios&Keycloak/useAxiosKeyCloak.js";
import KeycloakContext from "../../Axios&Keycloak/KeycloakProvider.js";
import Header from "../../Layout/Header/Header.js";
import UpdateInfo from "./components/UpdateInfo.js";
import DeleteRestaurant from "./components/DeleteRestaurant.js";
import MenuItemAdd from "./components/MenuItemAdd.js";
import MenuItemList from "./components/MenuItemListUpdate&Delete.js";
import EmployeesAdd from "./components/EmployeesAdd.js";

const RestaurantManagement = (props) => {

    const auth = useContext(KeycloakContext);

    const axios = useAxiosKeycloak();

    const [searchParams, setSearchParams] = useSearchParams();

    const [axiosError, setAxiosError] = useState();
    const [restaurant, setRestaurant] = useState({});


    useEffect(() => {
        const id = searchParams.get("id");
        axios.get(`${process.env.REACT_APP_API_URL}/restaurants/find`, { params: { id } })
            .then(response => {
                setRestaurant(response.data.response);
            })
            .catch((err) => {
                props.setAxiosError(err.response.data.error)
            });
    }, [])


    return (
        <div>
            <Header axiosError={axiosError} setAxiosError={setAxiosError} />
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
                <Typography variant="h4">{restaurant.name}</Typography>
                <UpdateInfo restaurant={restaurant} />
                <DeleteRestaurant restaurant={restaurant} />
            </Grid>
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
                <Typography variant="h4" textAlign="center">Menu item management</Typography>
                <MenuItemAdd restaurant={restaurant} />
                <MenuItemList restaurant={restaurant} />
            </Grid>
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
                <Typography variant="h4" textAlign="center">Employee Management</Typography>
                <EmployeesAdd restaurant={restaurant} />
            </Grid>
        </div>
    );
}

export default RestaurantManagement;
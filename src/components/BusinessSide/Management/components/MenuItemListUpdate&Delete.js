import { useContext, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import { Typography, Box, InputLabel, Input, Button } from "@mui/material";

import useAxiosKeycloak from "../../../Axios&Keycloak/useAxiosKeyCloak.js";
import KeycloakContext from "../../../Axios&Keycloak/KeycloakProvider.js";
import MenuItemUpdate from "./MenuItemUpdate.js";
import MenuItemDelete from './MenuItemDelete.js';

// import axios from 'axios';

const MenuItemList = (props) => {

    const axios = useAxiosKeycloak();

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();

    const [restaurant, setRestaurant] = useState({});
    const [items, setItems] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();

    const [selectedItem, setSelectedItem] = useState();



    useEffect(() => {

        const restaurantId = searchParams.get("id");
        axios.get(`${process.env.REACT_APP_API_URL}/restaurants/menu/find`, { params: { restaurantId } })
            .then(response => setItems(response.data))
            .catch(err => console.log(err));
    }, [])


    const columns = [
        { field: 'id', headerName: 'ID', width: 250 },
        { field: 'name', headerName: 'Item Name', width: 200 },
        { field: 'description', headerName: 'Description', width: 450 },
        { field: 'price', headerName: 'Price', width: 70 }
    ]

    const rows = items.map(obj => ({ id: obj._id, name: obj.name, description: obj.description, price: obj.price }));

    console.log()

    return (
        <div style={{ height: 300, width: '100%' }}>
            <MenuItemUpdate selectedItem={selectedItem} />
            <MenuItemDelete selectedItem={selectedItem} />
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                disableMultipleSelectionOnClick
                onSelectionModelChange={(id) => {
                    const selectedRow = rows.filter(row => row.id == id[0]);
                    setSelectedItem(selectedRow[0]);
                }}
            />

        </div>
    );


}

export default MenuItemList;
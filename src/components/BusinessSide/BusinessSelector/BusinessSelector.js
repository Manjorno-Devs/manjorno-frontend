import { Select, MenuItem, Typography, Grid, OutlinedInput, InputLabel, FormControl, Button } from '@mui/material'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const BusinessSelector = (props) => {

    const navigate = useNavigate();

    const [restaurantsWorking, setRestaurantsWorking] = useState([]);

    useEffect(() => {
        props.restaurants.forEach(restaurantToFind => {
            axios.get(`${process.env.REACT_APP_API_URL}/restaurants/find`, { params: { id: restaurantToFind.restaurantId } })
                .then(response => {
                    setRestaurantsWorking(restaurantsWorking => [...restaurantsWorking, response.data.response])
                })
                .catch((err) => {
                    props.setAxiosError(err.response.data.error)
                });
        });

    }, []);

    return (
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
            <Typography>Select Restaurant</Typography>
            <FormControl>
                <InputLabel id="RestaurantSelectorLabel">Select Restaurant</InputLabel>
                <Select
                    labelId="RestaurantSelectorLabel"
                    id="demo-simple-select"
                    sx={{ mb: 1, width: 300 }}
                    input={<OutlinedInput label="Select Restaurant" />}
                    onChange={event => navigate(`/restaurantManagement?id=${event.target.value._id}`)}
                >
                    <MenuItem disabled>Select Restaurant</MenuItem>
                    {
                        restaurantsWorking.map((restaurant) => (
                            <MenuItem
                                key={restaurant._id}
                                value={restaurant}
                            >
                                {restaurant.name}
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            <Button href="/businessCreate">Register</Button>
        </Grid>

    );
}

export default BusinessSelector;
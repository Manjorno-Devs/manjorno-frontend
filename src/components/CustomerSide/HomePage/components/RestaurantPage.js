import axios from "axios";
import { useEffect, useState } from "react";
import { Grid, Link, Typography } from "@mui/material";

const RestaurantPage = (props) => {

    const [restaurantObject, setRestaurantObject] = useState([{ "_id": undefined, "name": "", "contacts": {}, "locationLink": "" }]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/restaurants/find`, { params: { name: props.selectedRestaurant } })
            .then(response => {
                setRestaurantObject(response.data.response);

                console.log(restaurantObject[0]);
            })
            .catch(error => {
                console.log(error);
            });
        if (restaurantObject) {
            axios.get(`${process.env.REACT_APP_API_URL}/orders/menu/find`, { params: { restaurantId: restaurantObject[0]._id } })
                .then(response => console.log(response))
        }
    }, [])

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
            <Typography variant="h2">{restaurantObject[0].name}</Typography>
            <Link href={restaurantObject[0].locationLink}>Location</Link >
            <Typography variant="body1">{restaurantObject[0].contacts.Phone}</Typography>
            {console.log(restaurantObject[0].contacts.Phone)}
        </Grid>
    );

}

export default RestaurantPage;
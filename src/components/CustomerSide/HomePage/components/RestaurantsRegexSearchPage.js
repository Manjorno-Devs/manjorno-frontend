import axios from "axios";
import { useEffect } from "react";
import { Grid, Link } from "@mui/material";

const RestaurantRegexSearchPage = (props) => {

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
            {
                props.restaurants.map(restaurant => (
                    <Link href="#" >
                        {restaurant.name}
                    </Link>
                ))
            }
        </Grid>
    );

}

export default RestaurantRegexSearchPage;
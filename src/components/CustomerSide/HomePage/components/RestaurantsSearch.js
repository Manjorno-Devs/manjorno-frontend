import { Autocomplete, TextField, Typography, Grid, Alert } from '@mui/material';

const RestaurantSearch = (props) => {
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

            <Typography variant="h2" align="center">Manjorno</Typography>
            <Typography variant="h4" align="center">Food ordering made simple!</Typography>
            <Typography variant="body1" align="center">Made to help small businesses to digitalize their services!</Typography>
            <h1></h1>
            <Autocomplete
                freeSolo
                options={props.restaurants}
                onInputChange={props.restaurantSearchHandler}
                getOptionLabel={option => option.name}
                onChange={(event, value) => {
                    if (event._reactName.toString() === "onKeyDown") {
                        props.textFieldChangeHandler(event);
                        props.setSearchType("regex");
                    }
                    else if (event._reactName.toString() === "onClick") {
                        props.setSelectedRestaurant(event.target.innerHTML);
                        props.setSearchType("direct");
                    }
                }}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField
                    {...params}
                    label="Search Restaurants"
                    variant="outlined"
                    onChange={props.textFieldChangeHandler} />}
            />
        </Grid>
    )
}

export default RestaurantSearch;
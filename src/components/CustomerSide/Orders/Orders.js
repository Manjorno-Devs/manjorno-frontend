import { Grid, Typography } from "@mui/material"
import Header from "../../Layout/Header/Header";

const Orders = (props) => {

    return (
        <div>
            <Header axiosError={null} />
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

                <Typography variant="h4" align="center">Orders</Typography>
            </Grid>
        </div>
    );
}

export default Orders;
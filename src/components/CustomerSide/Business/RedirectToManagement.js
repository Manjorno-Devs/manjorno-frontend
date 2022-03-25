import {Link} from 'react-router-dom';
import { Typography, Button, Grid } from "@mui/material";
import Header from "../../Layout/Header/Header";

const RedirectToManagement = () => {

    return (
        <div>
            <Header />
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
                <Typography>Go to restaurant management</Typography>
                <Link to='/business'>Take me there!</Link>
            </Grid>
        </div>
    );
}

export default RedirectToManagement;
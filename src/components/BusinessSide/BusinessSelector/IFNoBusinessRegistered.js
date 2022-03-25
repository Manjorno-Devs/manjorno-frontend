import { Grid, Typography, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

const IFNoBusinessRegistered = () => {

    const navigate = useNavigate();
    
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
            <Typography variant="h4" align="center">Want to register your business?</Typography>
            <Button href="/businessCreate">Register</Button>
        </Grid>
    );
}

export default IFNoBusinessRegistered;
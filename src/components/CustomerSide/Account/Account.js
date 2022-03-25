import Header from '../../Layout/Header/Header.js';
import { Typography, Grid, Avatar, Box, Input, InputLabel, Button } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import useAxiosKeycloak from '../../Axios&Keycloak/useAxiosKeyCloak.js';
import { display } from '@mui/system';
import { useState, useContext } from 'react';
import KeycloakContext from '../../Axios&Keycloak/KeycloakProvider.js';
import jwt_decode from 'jwt-decode';
const Account = (props) => {

    const auth = useContext(KeycloakContext);
    const token = jwt_decode(auth.token);
    const keycloak = auth.keycloak;

    const axios = useAxiosKeycloak();

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [firstName, setfirstName] = useState();
    const [lastName, setLastName] = useState();
    const [currentPassword, setcurrentPassword] = useState();

    const [newPassword, setNewPassword] = useState();
    const [repeatPassword, setRepeatPassword] = useState();

    const [response, setResponse] = useState();
    const [axiosError, setAxiosError] = useState(false);



    const detailsChangeHandler = e => {
        e.preventDefault();
        axios.put(`${process.env.REACT_APP_API_URL}/users/update`, { username, email, firstName, lastName, currentPassword })
            .then(result => {
                keycloak.logout();
            })
            .catch(err => {
                setAxiosError(err.response.data.error)
            });
    }

    const passwordChangeHandler = e => {
        e.preventDefault();
        axios.patch(`${process.env.REACT_APP_API_URL}/users/resetPassword/currentPassword`, { currentPassword, newPassword, repeatPassword })
            .then(result => {
                keycloak.logout();
            })
            .catch(err => {
                setAxiosError(err.response.data.error)
            });
    }

    const passwordChangeEmailHandler = e => {
        e.preventDefault();
        axios.patch(`${process.env.REACT_APP_API_URL}/users/resetPassword/email`, {})
            .then(result => {
                keycloak.logout();
            })
            .catch(err => {
                setAxiosError(err.response.data.error)
            });
    }

    return (
        <div>
            <Header axiosError={axiosError} axiosErrorSetter={setAxiosError} />
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
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection='column'
                >
                    <Avatar
                        align="center"
                        sx={{ bgcolor: deepOrange[500], width: 100, height: 100, fontSize: 40 }}
                    >
                        {token.given_name[0]}
                        {token.family_name[0]}
                    </Avatar>

                    <Typography variant="h6" align="center">Hi, {token.name}!</Typography>
                    <Typography variant="h5" align="center">Change your details</Typography>

                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection='column'
                >
                    <form onSubmit={detailsChangeHandler}>
                        <InputLabel>Username</InputLabel>
                        <Input id="username" onChange={event => setUsername(event.target.value)} placeholder={token.preferred_username} />

                        <InputLabel>Email address</InputLabel>
                        <Input id="email" onChange={event => setEmail(event.target.value)} placeholder={token.email} />

                        <InputLabel>First Name</InputLabel>
                        <Input id="firstName" onChange={event => setfirstName(event.target.value)} placeholder={token.given_name} />

                        <InputLabel>Last Name</InputLabel>
                        <Input id="lastName" onChange={event => setLastName(event.target.value)} placeholder={token.family_name} />

                        <InputLabel>Confirm Password</InputLabel>
                        <Input required id="confirmPass" type="password" onChange={event => setcurrentPassword(event.target.value)} />

                        <Button style={{ margin: '0 auto', display: "flex" }} type="submit">Change credentials</Button>
                    </form>

                </Box>
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
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection='column'
                >
                    <Typography variant="h5" align="center">Update your password</Typography>
                    <form onSubmit={passwordChangeHandler}>
                        <InputLabel>Current Password</InputLabel>
                        <Input required id="currentPass" type="password" onChange={event => setcurrentPassword(event.target.value)} />

                        <InputLabel>New Password</InputLabel>
                        <Input required id="newPass" type="password" onChange={event => setNewPassword(event.target.value)} />

                        <InputLabel>Repeat Password</InputLabel>
                        <Input required id="repeatPassword" type="password" onChange={event => setRepeatPassword(event.target.value)} />

                        <Button style={{ margin: '0 auto', display: "flex" }} type="submit">Reset Password</Button>
                    </form>
                    <Typography variant="h5" align="center">Update your password</Typography>
                    <form onSubmit={passwordChangeEmailHandler}>
                        <Button style={{ margin: '0 auto', display: "flex" }} type="submit">Reset Password</Button>
                    </form>
                    <Button onClick={keycloak.logout}>Logout</Button>
                </Box>
            </Grid>
        </div>
    );
}

export default Account;
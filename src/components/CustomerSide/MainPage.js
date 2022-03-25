import HomePage from './HomePage/HomePage.js';
import Account from './Account/Account.js';
import Orders from './Orders/Orders.js';
import RedirectToManagement from './Business/RedirectToManagement.js';
import { useEffect, useState, React } from 'react';

import { Home, Store, AccountCircle, Restore, NavigateBefore } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import Keycloak from 'keycloak-js';

// import { useNavigate } from "react-router-dom";

const MainPage = () => {

    const [page, setPage] = useState("");

    return (
        < div >
            {
                {
                    "": <HomePage />,
                    "orders": <Orders />,
                    "business": <RedirectToManagement />,
                    "account": <Account />
                }[page]
            }
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    bgcolor='white'
                    onChange={(event, value) => {
                        setPage(value);
                    }}
                >
                    <BottomNavigationAction label="Home" value="" icon={<Home />} />
                    <BottomNavigationAction label="Orders" value="orders" icon={<Restore />} />
                    <BottomNavigationAction label="Business" value="business" icon={<Store />} />
                    <BottomNavigationAction label="Account" value="account" icon={<AccountCircle />} />
                </BottomNavigation>
            </Paper>
        </div >
    );
}

export default MainPage;

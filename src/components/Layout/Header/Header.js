import { useState } from 'react';
import { AppBar, Button, Toolbar, Typography, Alert, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './Header.css';

import Modal from '../Modal/Modal.js';
import Backdrop from '../Backdrop/Backdrop.js';
import { Image } from '@mui/icons-material';

const Header = (props) => {

    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} >
                    Manjorno
                </Typography>
            </Toolbar>
            
            <Collapse in={props.axiosError}>
                <Alert
                    severity="error"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                props.axiosErrorSetter(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    {props.axiosError ? props.axiosError.toString() : null}
                </Alert>
            </Collapse>
        </AppBar>
    );
    
}


export default Header;
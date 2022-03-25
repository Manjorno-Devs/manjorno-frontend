import './Modal.css'
import {Button, Typography, ButtonGroup} from '@mui/material';
import {Save, Cancel} from '@mui/icons-material';


const Modal = (props) => {
    return (
        <div className="Modal">
            <Typography variant="h6">Are you sure?</Typography>
            <ButtonGroup>    
                <Button startIcon={<Save />} variant="contained" onClick={props.onConfirm}>Confirm</Button>
                <Button startIcon={<Cancel />} variant="contained" color="secondary" onClick={props.onCancel}>Cancel</Button>
            </ButtonGroup>
        </div>
    );
}

export default Modal;
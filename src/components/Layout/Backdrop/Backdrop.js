import './Backdrop.css'

const Backdrop = (props) => {

    return(
        <div className="Backdrop" onClick={props.onCancel}/>
    );

}

export default Backdrop;
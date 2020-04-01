import React,{ useState } from 'react';
import Modal from '../../UI/Modal/Modal';
import Spinner from '../../UI/Spinner/Spinner';
import classes from './Bought.module.css';
import Button from '../../Button/Button';
const Bought = (props) =>{
    const [showContent, setShowContent] = useState(false);
    setTimeout(() => {
        setShowContent(true);
    }, 3000);
    let content = <Spinner color="primary" />
    if(showContent){
        content = (
            <React.Fragment>
                <h2>¡Su compra ya ha sido realizada!</h2>
                <Button width="50%" onClick={props.close}> CERRAR </Button>
            </React.Fragment>
        )
    } 
    return (
        <Modal>
            <div className={classes.bought}>
                {content}
            </div>
        </Modal>
    )
}

export default Bought;
import React, { useState } from 'react';
import classes from './Product.module.css';
import Button from '../Button/Button';
import Spinner from '../UI/Spinner/Spinner';


const Product = (props) =>{
    const [isLoading, setIsLoading] = useState(true);
    
    const submitHandler = () =>{
        props.onAdd();
    }
    return(             
        <div className={classes.Product}>
            <img alt={props.name} src={props.image} onLoad={() => setIsLoading(false)} />
            {isLoading ? <Spinner color="primary" /> : null}
            <h3  className={classes.Name} >{props.name}</h3>
            { props.price ? <h4> $ {props.price.toFixed(2)}</h4> : null}
            <Button style={  {alignSelf: 'flex-end', marginBottom: '10px' }} onClick={submitHandler}>Agregar Producto</Button>
        </div>
    )
}

export default Product;
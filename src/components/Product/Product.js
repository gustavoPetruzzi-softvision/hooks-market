import React, {useState} from 'react';
import classes from './Product.module.css';
import Button from '../Button/Button';
/*
const add = (props, amount) =>{
    
    props.onAdd(amount);
}
*/


const Product = (props) =>{
    const submitHandler = () =>{
        props.onAdd(1);
    }
    const [addProduct, setAddProduct] = useState(false);
    /*
    let button;

    if(addProduct){
        button = (
            <div>
                muestra boton
            </div>
        )
    }
    else{
        button =<Button style={{alignSelf: 'flex-end'}} clicked={() =>props.onAdd(1)}>Agregar Producto</Button>
    }
    */
    return(             
        <div className={classes.Product}>
            <img alt={props.name} src={props.image} />
            <h3  className={classes.Name} >{props.name}</h3>
            <h4> $ {props.price.toFixed(2)}</h4>
            <Button style={{alignSelf: 'flex-end'}} clicked={submitHandler}>Agregar Producto</Button>
                         


        </div>
    )
}

export default Product;
//onClick={props.clicked}
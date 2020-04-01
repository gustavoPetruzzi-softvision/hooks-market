import React, { useContext, useState, useEffect } from 'react';
import classes from './ProductDetail.module.css';
import Product from '../../Product/Product';
import Button from '../../Button/Button';
import { CartContext } from '../../../context/cart-context';
const ProductDetail = (props) =>{
    const {product, onClose} = props;
    const {cart, addProduct, removeProduct, removeAllProducts} = useContext(CartContext);
    
    const [selected, setSelected] = useState(cart.filter(prod => prod.id === product)[0]);
    
    const add = () =>{
        addProduct(selected);
    }
    const remove = () =>{
        if(selected.amount === 1){
            removeAll();
        } else {
            removeProduct(selected);
        }
    }

    const removeAll = () =>{
        removeAllProducts(selected);
        onClose();
    }

    useEffect(() =>{

    },[])

    return (
        <React.Fragment>
            <div className={classes.backdrop}></div>
            {selected ? <div className={classes.productDetail}>
                <div className={classes.productContainer}>
                    <Product 
                        style={{width:'100%'}}
                        name={selected.name}
                        price={selected.price}
                        image={selected.image}
                        onAdd={add}	
                    />

                </div>
                <div className={classes.actionContainer}>
                    <h2>Cantidad:</h2>
                    <h2 style={{textAlign:'right'}} > {selected.amount} </h2>
                    <h2>Precio total:</h2>
                    <h2 style={{textAlign:'right'}}> $ {(selected.price * selected.amount).toFixed(2)} </h2>
                    <Button width="40%" danger onClick={remove} >QUITAR</Button>
                    <Button width="40%" danger onClick={removeAll}>QUITAR TODOS</Button>
                </div>
                <div className={classes.closeContainer}>
                    <Button onClick={onClose}>CERRAR</Button>
                </div>
                
            </div> : null }
        </React.Fragment>
    )
    
}

export default ProductDetail;
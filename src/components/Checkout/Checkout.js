import React, { useContext, useState, useEffect } from 'react'
import classes from './Checkout.module.css';
import Button from '../Button/Button';
import ListItem from '../UI/ListItem/ListItem';
import { CartContext } from '../../context/cart-context';
import ProductDetail from './ProductDetail/ProductDetail';
import Bought from './Bought/Bought';
const Checkout = (props) =>{
    const {cart} = useContext(CartContext);
    const [showProduct, setShowProduct] = useState(false);
    const [showBought, setShowBought] = useState(false);
    const [product, setProduct] = useState('');
    const selectProduct = (id) =>{
        setProduct(id);
        setShowProduct(true);
    }

    const closeModal = () =>{
        setProduct('');
        setShowProduct(false);
    }

    const buy = () =>{
        if(cart.length > 0){
            setShowBought(!showBought);
        }
    }
    return(
        <div className={classes.cartContainer}>
            {showProduct ? <ProductDetail product={product} onClose={closeModal} /> : null }
            {showBought ? <Bought close={buy} />: null}
            <div className={classes.title}>
                <h2>Mi changuito ({cart.reduce((acc, cur) => acc + cur.amount, 0)})</h2>
            </div>
            <div className={classes.infoContainer}>
                <div>
                    Cantidad de Productos
                </div>
                <div className={classes.item}>
                    {cart.reduce((acc, cur) => acc + cur.amount, 0)}
                </div>
                <div>
                    Total a pagar
                </div>
                <div className={classes.item}>
                    $ {cart.reduce((acc, cur) => acc + (cur.amount * cur.price), 0).toFixed(2)}
                </div>
            </div>
            <div className={classes.buy}>
                <Button width="50%" onClick={buy}> COMPRAR </Button>
            </div>
            <div className={classes.list}>
                {cart.map(product =>{
                    return(
                        <ListItem
                            key={product.id} 
                            image={product.image}
                            price={product.price}
                            name={product.name}
                            amount={product.amount}
                            clicked={() =>selectProduct(product.id)}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Checkout
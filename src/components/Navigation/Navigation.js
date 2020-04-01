import React, { useContext } from 'react';
import classes from './Navigation.module.css';
import cartLogo from '../../assets/shopping-cart.png';
import { Link, useHistory } from 'react-router-dom';
import { CartContext } from '../../context/cart-context';


const Navigation = (props) =>{
    let history = useHistory();

    const cartContext = useContext(CartContext);
    const {cart} = cartContext;

    const navigateTo = (route) =>{
        history.push(route);
    }
    return(
        <header className={classes.Header}>
            <div onClick={() => navigateTo("/")}>
                <img src={cartLogo} alt="Eshop"  />
                <p style={{marginLeft: '10px'}} className={classes.Item}> Eshop</p>
            </div>

            <nav className={classes.Navigation}>
                <ul className={classes.Items} onClick={() => navigateTo("/checkout")}>
                    <li className={classes.Item}>
                       <p> $ {(cart.reduce((acc,cur) => acc + (cur.price * cur.amount), 0).toFixed(2))} </p>
                    </li>
                    <li className={classes.Cart}>
                        <Link to="/checkout" />
                        <div className={classes.CartObject}>
                           <p> {cart.reduce((acc,cur) => acc + cur.amount, 0)} </p>
                        </div>
                        <img src={cartLogo} alt="cart" />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;
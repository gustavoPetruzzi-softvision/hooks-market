import React, { useContext, useState, useCallback } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import ProductList from '../ProductList/ProductList';
import {AuthContext} from '../../context/auth-context';
import Auth from '../Auth/Auth';
import classes from './Layout.module.css';
import { FirebaseContext } from '../Firebase';
import Checkout from '../Checkout/Checkout';
import CartContextProvider, { CartContext } from '../../context/cart-context';

const Layout = () =>{
    const authContext = useContext(AuthContext);

    let content = (
        <FirebaseContext.Consumer>
            {firebase => <div className={classes.auth}> <Auth firebase={firebase} /> </div>}
        </FirebaseContext.Consumer>
    )
    if(authContext.isAuth){
        content = (
            <React.Fragment>
                <Router>
                    <CartContextProvider>
                        <Navigation  />
                        <Switch>
                            <Route exact path="/">
                                <ProductList/>
                            </Route>
                            <Route path="/checkout">
                               <Checkout  />
                            </Route>
                        </Switch>
                    </CartContextProvider>
                </Router>
            </React.Fragment>
        )
    }
    return (
        <div className={classes.layout} style={{paddingTop: authContext.isAuth ? '50px' : '0'}}>
            {content}
        </div>
    )
}

export default Layout;
import React, { useState } from 'react';

export const CartContext = React.createContext();

const CartContextProvider = props =>{
    const [cart, setCart] = useState([])
    const addProduct = (product) =>{
        setCart(prevCart => {
            //[...prevCart, {amount: amount, ...product}]
           // const filterProduct = prevCart.filter(prevProduct => prevProduct.id === product.id)[0];
            const index = prevCart.findIndex(prevProduct => prevProduct.id === product.id);
            if(index !== -1){
                const cart = [...prevCart];
                cart[index].amount = cart[index].amount + 1;
                return [...cart];
            } else{
                return [...prevCart, {amount: 1, ...product}];
            }
        });
    }
    const removeProduct = (product) =>{
        setCart(prevCart =>{
            const index = prevCart.findIndex(prevProduct => prevProduct.id === product.id);
            if(index !== -1){
                let cart = [...prevCart];
                if(cart[index].amount !== 1){
                    cart[index].amount = cart[index].amount - 1;
                    return [...cart]
                } else{
                    return [...cart];
                }
            } else {
                return [...cart];
            }
        })
    }

    const removeAllProducts = (product) =>{
        setCart(prevCart =>{
            const index = prevCart.findIndex(prevProduct => prevProduct.id === product.id);
            if(index !== -1){
                let cart = [...prevCart];
                cart.splice(index,1);
                return [...cart];
            }
        })
    }
    return(
        <CartContext.Provider value={{cart: cart, addProduct: addProduct, removeProduct: removeProduct, removeAllProducts: removeAllProducts} }>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
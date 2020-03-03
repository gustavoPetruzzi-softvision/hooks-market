import React,{useState} from 'react';
import classes from './App.module.css';
import ProductList from './ProductList';
import Navigation from '../components/Navigation/Navigation';




const App = () =>{

    
    const [cart, setCart] = useState([]);

    const addToCart = (product, amount) =>{
        
        setCart(prevCart => [...prevCart, {amount: amount, ...product}]);
        /*
        let newCart = [...cart];
        product.amount = amount;
        // Ver como organizar los productos;
        newCart.push(product);
        setCart(newCart);
        console.log(cart);
        */
        
    }

    const removeProduct = (id) =>{
        return 1;
    }

    
    return(
        <div className={classes.App}>
            <Navigation cart={cart} />
            <ProductList addToCart={addToCart} />
            
        </div>
    )
}

export default App;

/*
    if(products.length > 0){
        content = products.map(product => {
            return (
                <Product 
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.photo}
                    //clicked={() =>addProduct(product.id)}
                    remove={() => removeProduct(product.id)}
                    add={(amount) =>addProduct(product.id, amount)}
                />
            )
        })  
    }
    else{
        content = 'no carga';
    }
*/
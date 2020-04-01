import React,{ useState, useContext } from 'react';
import Product from '../Product/Product';
import Button from '../Button/Button';
import classes from './ProductList.module.css';
import useProducts from '../useProducts';
import Spinner from '../UI/Spinner/Spinner';
import { CartContext } from '../../context/cart-context';
const ProductList = (props) =>{
    
    
	const [page, setPage] = useState(1);
	const products = useProducts(page);
	const cartContext = useContext(CartContext);
	const addMoreProducts = () =>{
		let newPage = page + 1;	
		setPage(newPage);
		
	}

	const addProduct = (id) => {
		const productAdded = products.filter(product => product.id === id);
		cartContext.addProduct(productAdded[0]);
	}

    return(
        <div className={classes.productList}>
            {products.length > 0 && products.map(product => {
                return (
                    <Product 
						key={product.id}
						name={product.name}
						price={product.price}
						image={product.image}
						onAdd={() =>addProduct( product.id)}	
                    />
                )
            })}
			{ products.length === 0 &&
				<div className={classes.spinner}>
					<Spinner color="white" />
				</div>
			}
			{products.length > 0  && <Button  style={{ width: '70%'}} onClick={addMoreProducts} > Mas productos</Button> }
        </div>
    )

}

export default ProductList;



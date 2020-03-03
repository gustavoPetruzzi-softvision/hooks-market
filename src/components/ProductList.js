import React,{useState} from 'react';
import Product from '../components/Product/Product';
import Button from '../components/Button/Button';

import useProducts from './useProducts';
const ProductList = (props) =>{
    
    
	const [page, setPage] = useState(1);
	const products = useProducts(page);
	
	const addMoreProducts = () =>{
		let newPage = page + 1;	
		setPage(newPage);
		
	}

	const addProduct = (id, amount) => {

		const productAdded = products.filter(product => product.id === id);
		
		props.addToCart(productAdded[0], amount);
	}

    return(
        <React.Fragment>
            {products.map(product => {
                return (
                    <Product 
						key={product.id}
						name={product.name}
						price={product.price}
						image={product.photo}
						onAdd={(amount) =>addProduct( product.id, amount)}	
                    />
                )
            })}
			 <Button style={{ width: '70%'}} clicked={addMoreProducts} > Mas productos</Button>
        </React.Fragment>
    )

}

export default ProductList;



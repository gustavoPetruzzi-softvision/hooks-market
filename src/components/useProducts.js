import  {useState, useEffect, useCallback} from 'react';
import api from '../api';

const useProducts = (page) =>{

    const [products, setProducts] = useState([]);
    
    const getProducts = useCallback(async () =>{
        let response;
        if(page === 1){
            response = await api.get('/products');
            setProducts(response.data.products);
        }
        else{
            response = await api.get('/products',{
				params:{
					page: page
				}
			})
			setProducts(prevProducts => prevProducts.concat(response.data.products));
        }
        
    },[page]);

    useEffect(() =>{
        getProducts();
    },[getProducts,page])
    // sin [], se ejecuta cada vez que se renderiza el componente (componentDidUpdate)
    // con [], se ejecuta solo cuando se renderiza la primera vez (componentDidMount)
    // con [dependencia], se ejecuta solo cuando dependencia cambia
    return products;
}

export default useProducts;
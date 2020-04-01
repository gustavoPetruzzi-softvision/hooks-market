import  {useState, useEffect, useCallback} from 'react';
import api from '../api';

const useProducts = (page) =>{

    const [products, setProducts] = useState([]);
    
    const getProducts = useCallback(async () =>{
        const response = await api.get(`products/${page}.json`);
        let responseArray = [];
        for (const prop in response.data){
            responseArray.push({id: prop, ...response.data[prop]});
        }
        setProducts(prevProducts => prevProducts.concat(responseArray));
        
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
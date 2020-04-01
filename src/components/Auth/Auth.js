import React, {useContext, useState, useReducer} from 'react';
import classes from './Auth.module.css';
import { AuthContext } from '../../context/auth-context';
import Button from '../Button/Button';
import logo from '../../assets/shopping-cart.png';
import Spinner from '../UI/Spinner/Spinner'
import ErrorModal from '../UI/ErrorModal/ErrorModal';

const actionLogin = {
    SEND: 'SEND',
    RESPONSE: 'RESPONSE',
    ERROR: 'ERROR'
}

const loginReducer = (currentState, action) =>{
    switch (action.type) {
        case actionLogin.SEND:
            return {loading: true, error: null}
        case actionLogin.RESPONSE:
            return {loading: false, error: null}
        case actionLogin.ERROR:
            return {loading: false, error: "User/Password Incorrect"}
        default:
            break;
    }
}



const Auth = (props) =>{
    const authContext = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginState, dispatch] = useReducer(loginReducer, {loading: false, error: null});
    const defaultUser = 'gustavo.petruzzi@softvision.com';
    const defaultPassword = '1161544761';

    const loginHandler = () => {
        dispatch( {type: actionLogin.SEND} )
        if(email === '' && password === ''){
            props.firebase.do(defaultUser, defaultPassword)
            .then(response =>{
                dispatch( {type: actionLogin.RESPONSE });
                authContext.login();
            })
            .catch(error =>{
                dispatch( {type: actionLogin.ERROR});
            })
        } else {
            props.firebase.do(email, password)
            .then(response =>{
                dispatch( {type: actionLogin.RESPONSE});
                authContext.login();
            })
            .catch(error =>{
                console.log(error);
                dispatch( {type: actionLogin.ERROR})
            })
        }
    }

    const clearError = () =>{
        dispatch( {type: actionLogin.RESPONSE} );
    }

    // const validateLogin = () =>{
    //     if(email !== 'admin' && password !=='admin'){
    //         return false;
    //     }
    //     return true;    
    // }

    return(
        <div className={classes.authContainer}>
            <img src={logo} style={{width: '50px'}} alt="cart" />
            <h2>INGRESAR</h2>
            <div className={classes.inputContainer} >
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </label>
            </div>
            <div className={classes.inputContainer}>
                <label>
                    Password
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </label>
            </div>
            {!loginState.loading && <Button  width="50%" onClick={loginHandler}>Ingresar</Button>}
            {loginState.loading && <Spinner color="primary" />}
            {loginState.error && <ErrorModal onClose={clearError} > {loginState.error}</ErrorModal>}
        </div>
    )
}

export default Auth

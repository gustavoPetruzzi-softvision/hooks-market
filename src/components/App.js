import React from 'react';
import classes from './App.module.css';
import AuthContextProvider from '../context/auth-context';

import Layout from '../components/Layout/Layout';

const App = () =>{

    return (
        <AuthContextProvider>
            <Layout className={classes.App} />
        </AuthContextProvider>
    )
}

export default App;


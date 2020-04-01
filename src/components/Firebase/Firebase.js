import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDmoLgXUPdqrBiRTQkHtFaGoJAwJII8dxw",
    authDomain: "products-524f6.firebaseapp.com",
    databaseURL: "https://products-524f6.firebaseio.com",
    projectId: "products-524f6",
    storageBucket: "products-524f6.appspot.com",
    messagingSenderId: "420692007875",
    appId: "1:420692007875:web:2d8c70dde863c083a9fb76"
}

class Firebase {
    constructor(){
        app.initializeApp(config);

        this.auth = app.auth();
    }

    do = (email, password) =>{
        return this.auth.signInWithEmailAndPassword(email, password);
    }
}

export default Firebase;
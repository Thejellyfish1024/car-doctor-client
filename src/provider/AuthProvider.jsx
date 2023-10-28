/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data =>{
            setServices(data)
            console.log(services);
        })
    },[])

    const signUpUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const logOut = () =>{
        setLoading(true)
       return signOut(auth)
    }

    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () =>{
        setLoading(true)
       return signInWithPopup(auth,googleProvider);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current user', currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe();
    },[])



    const authInfo = {
        loading,
        services,
        user,
        setUser,
        signUpUser,
        signInUser,
        logOut,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

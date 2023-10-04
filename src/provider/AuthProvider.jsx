/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) =>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email, password)
    }
    //logout
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
        }

    //onAuthStateChange
    useEffect(() =>{
      const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            console.log('On auth state change ', currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return () =>{
            unSubscribe()
        }
    },[auth])

    const authInfo = {
        user,
        createUser,
        logOut,
        loading,
        signInUser

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
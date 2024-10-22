import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firbase/firbase.config";

export const AuthContex = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [lodding, setLodding] = useState(true)
  const createUser = (email, password) => {
    setLodding(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const logIn = (email, password) =>{
    setLodding(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () =>{
    setLodding(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLodding(false)
    });
    return () => {
      unSubcribe();
    }
  }, [])


  const authInfo = {
    user,
    createUser,
    logOut,
    logIn,
    lodding
  }
  return (
    <AuthContex.Provider value={authInfo}>
      {children}
    </AuthContex.Provider>
  );
};

export default AuthProvider;
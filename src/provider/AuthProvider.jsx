import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

export const authContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  const createUser = (email,password) =>{
     setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
  }
  const signInUser = (email,password) =>{
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
  }

  const userInfo = {
    user,
    createUser,
    setLoading,
    signInUser,

  };
  return (
    <authContext.Provider value={userInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;

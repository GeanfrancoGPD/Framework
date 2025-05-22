import { auth } from "./firebase_config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext  =  createContext();

export const useAuth = () =>{
    const context = useContext(AuthContext);
    if(!context){
        console.log("Error no creaste el contexto");
    }
    return context;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Registro
  const register = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth , email, password);
  };

  // Logout para cerrar cesion 
  const logout = () => {
    return signOut(auth );
  };

  // Detectar cambios de usuario
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth , currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

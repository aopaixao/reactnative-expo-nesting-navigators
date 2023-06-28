import React, { createContext, useContext, useState } from "react";
import { authService } from "../services/AuthService";

//Contexto
export const AuthContext = createContext({});

//Contexto Provider
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  //Esse state indica que a requisição de autenticação está sendo processada
  const [loading, setLoading] = useState(false);

  const signIn = (username, password) => {
    //Chama o serviço de login para realizar a autenticação
    const _authStatus = authService.signIn(
      username,
      password,
    );

    //Se autenticado, seta o loading para false
    if(_authStatus)
      setLoading(false);
    
    //Seta o status de autenticação via state. 
    //  Com isso todo o App será notificado do mesmo.
    setIsAuthenticated(_authStatus);
  };

  const signOut = () => {
    //Altera o status de autenticação e comunica o App
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated, loading, setLoading, signIn, signOut
    }}>
      {children}
    </AuthContext.Provider>
  );
}

//Custom Hook (Hook Customizado para permitir o uso do Contexto em componentes não funcionais)
export const useAuth = () => useContext(AuthContext);
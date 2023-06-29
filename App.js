import 'react-native-gesture-handler';
import React, {useRef, useState, useEffect} from 'react';
import {AppState, StyleSheet, Text, View} from 'react-native';
import { AuthProvider } from './src/context/AuthContext';
import Routes from './src/routes';

const App = () => {
  /*
    O código a seguir verifica o status do aplicativo: se está aberto ou não.
    Tal funcionalidade é útil, por exemplo, se desejamos realizar alguma ação
      quando o usuário fechar o app, como limpar o local storage, etc.
  */
  const appState = useRef(AppState.currentState);
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
      }

      appState.current = nextAppState;
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);
  /*Fim do código de verificação do status do aplicativo*/
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
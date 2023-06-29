import { StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

const Home = () => {
  //hook similar ao useEffect: 
  //  o código contido nele será executado sempre que a screen foi visitada
  useFocusEffect(
    //o hook abaixo trata da re-renderização, para evitar que o código englobado
    //  seja recriado a cada renderização.
    useCallback(() => {
      console.log('Entrou na Screen');

      //no return podemos executar códigos quando o usuário sair da screen
      return () => console.log('Saiu da Screen');
    }, [])
  );
  return (
      <View style={styles.container}>
          <Text>Home</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
});

export default Home;
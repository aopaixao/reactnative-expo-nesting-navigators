import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  TouchableOpacity 
} from 'react-native';
import { useState } from "react";
import { useAuth } from '../../context/AuthContext';

const SignIn = ({navigation}) => {

  const [username, setUserName] = useState('');
  const [senha, setSenha] = useState('');
  const auth = useAuth();

  const handleLogin = () => {
    //console.log('handleLogin: ' + JSON.stringify(auth));
    auth.setLoading(true);
    auth.signIn(username, senha);
  }

  return (
    <View style={styles.container}>
        <Text style={styles.txt} >Bem-Vindo</Text>
        <TextInput
            style={styles.input}
            placeholder="E-mail"
            onChangeText={setUserName}
            value={username}
        />
        <TextInput
            style={styles.input}
            placeholder="Senha"
            onChangeText={setSenha}
            value={senha}
            secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={() => handleLogin()} >
            <Text style={styles.txtButton}>Login</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#ffcc00',
      alignItems: 'center',
      justifyContent: 'center',
  },
  txt: {
      fontSize:20,
      fontWeight:'bold',
      marginBottom:30
  },
  input: {
      height: 40,
      width: 200,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderColor: '#000',
      borderWidth: 1,
      borderRadius: 10, 
  },
  button:{
      alignItems: 'center',
      backgroundColor: '#000',
      padding: 8,
      borderColor: '#000',
      borderWidth: 1,
      borderRadius: 10, 
      height: 40,
      width: 100,
  },
  txtButton:{
      color:'#fff',
  },
});

export default SignIn;
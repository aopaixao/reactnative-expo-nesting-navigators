import 'react-native-gesture-handler';
import { AuthProvider } from './src/context/AuthContext';
import Routes from './src/routes';

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
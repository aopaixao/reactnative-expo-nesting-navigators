import { NavigationContainer, CommonActions, StackActions, DrawerActions   } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import Feed from '../pages/Feed';
import SignIn from '../pages/SignIn';
import Help from '../pages/Help';
import Invite from '../pages/Invite';
import { Loading } from '../components/Loading';
import { useAuth } from '../context/AuthContext';
import { TouchableOpacity } from 'react-native';
 
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


//Componente contendo as screens de Autenticação
const AuthStackNav = () => {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}

//Componente contendo as screens do App (pós autenticação)
const AppStackNav = () => {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabNav" component={TabNav} />
    </Stack.Navigator>
  );
}

//Componente customizado para adicionar o botão de sair na lista
//  de itens do DrawerNav
const CustomDrawerLogoutButton = (props) => {
  const auth = useAuth();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="SignOut" onPress={() => auth.signOut()} />
    </DrawerContentScrollView>    
  );
}

const DrawerNav = () => {
  return (
    <Drawer.Navigator 
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerLogoutButton {...props} />}
    >
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
}

const TabNav = ({navigation}) => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen 
        name="Feed" 
        component={Feed} />
      <Tab.Screen name="Invite" component={Invite} />
      <Tab.Screen name="ProfileDrawer" 
        component={DrawerNav} 
        options={{
          title: 'Profile',
          tabBarButton: props => ( 
            <TouchableOpacity 
              {...props} 
              onPress={
                () => 
                navigation.navigate('ProfileDrawer', {screen: 'Profile'})
              } 
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Routes = () => {
  const {isAuthenticated, loading} = useAuth();

  //Se estiver processando, apresenta o componente loading
  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStackNav /> : <AuthStackNav />}
    </NavigationContainer>
  );
}

export default Routes;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Login} from './src/screens/user/screens/Login'
import {Register} from './src/screens/user/screens/Register'
import { Navigation } from './src/screens/navigation/Navigation';
import { UserContextProvider } from './src/screens/user/UserContext';
import { ProductContextProvider } from './src/screens/product/ProductContext';

export default function App() {
  return (
    <UserContextProvider>
      <ProductContextProvider>
        <Navigation />
      </ProductContextProvider>
    </UserContextProvider>
  );
}


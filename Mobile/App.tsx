import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Loader from './src/componets/Loader';
import { Home } from './src/screens/Home';
import {
  useFonts,
  Inter_400Regular,
  Inter_800ExtraBold,
  Inter_700Bold,
  Inter_600SemiBold
} from '@expo-google-fonts/inter'
import { Header } from './src/componets/Header';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_800ExtraBold,
    Inter_700Bold,
    Inter_600SemiBold
  });

  if (!fontsLoaded) {
    return <Loader />;
  }

  return (
    <>
      <Home />
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
    </>
  );
}

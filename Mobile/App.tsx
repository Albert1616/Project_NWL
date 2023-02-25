import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Loader from './src/componets/Loader';
import {
  useFonts,
  Inter_400Regular,
  Inter_800ExtraBold,
  Inter_700Bold,
  Inter_600SemiBold
} from '@expo-google-fonts/inter'
import { Routes } from './src/routes';

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
      <Routes />
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
    </>
  );
}

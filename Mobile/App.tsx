import { StyleSheet, Text, View,StatusBar } from 'react-native';
import Loader from './src/componets/Loader';
import {
  useFonts,
  Inter_400Regular,
  Inter_800ExtraBold,
  Inter_700Bold,
  Inter_600SemiBold
} from '@expo-google-fonts/inter'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_800ExtraBold,
    Inter_700Bold,
    Inter_600SemiBold
  });

  if(!fontsLoaded){
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
      <Text>Test text</Text>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  }
});

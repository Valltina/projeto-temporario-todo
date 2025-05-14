import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from "./assets/LOGOTODO2.png";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.logo}/>
        <Text>TODO list</Text>
      </View>
      <StatusBar style="auto" />
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
  logo: {
    height: 100,
  },
});

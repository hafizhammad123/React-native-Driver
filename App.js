import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navigate } from './Config/Navigation';

export default function App() {
  return (
    <View style={styles.container}>
    
      <Navigate/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
  },
});


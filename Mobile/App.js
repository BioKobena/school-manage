import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './screens/Navigation';
import { StudentProvider } from './components/students/StudentContext';

export default function App() {
  return (
    <StudentProvider>
      <Navigation />
    </StudentProvider>
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

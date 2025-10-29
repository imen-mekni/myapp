import AppNavigator from "./src/navigation/AppNavigator";
import { View, Text, StyleSheet } from "react-native";
import Toast from 'react-native-toast-message';

export default function App() {
  return ( 

    <>
     <AppNavigator />
         <Toast/>

    </>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

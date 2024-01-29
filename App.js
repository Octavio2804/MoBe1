import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
// PAGES 
import Home from './screens/Home';
import Instrucciones from './screens/Instrucciones';
import Countdown from './screens/Countdown';
import Versus from './screens/Versus';
import Categorias from './screens/Categorias';
import Puntaje from './screens/Puntaje';
import Resultado from './screens/Resultado';

// STACK-NAVIGATION
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';





const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>


          <Stack.Screen 
          name='Home'
          component={Home}
          options={{
            headerShown: false,
          }}/>


          <Stack.Screen 
          name='Instrucciones'
          component={Instrucciones}
          options={{
            title: "Intruciciones",
            headerStyle: {
              backgroundColor: "white",
            },
            headerLargeTitleStyle: {
              fontWeight: 'bold',
            }
          }}/>


          <Stack.Screen 
          name='Countdown'
          component={Countdown}
          options={{
            headerShown: false,
          }}/>


          <Stack.Screen 
          name='Versus'
          component={Versus}
          options={{
            headerShown: false,
          }}/>


          <Stack.Screen 
          name='Categorias'
          component={Categorias}
          options={{
            headerShown: false,
          }}/>


          <Stack.Screen 
          name='Puntaje'
          component={Puntaje}
          options={{
            title: "PUNTAJE",
            headerStyle: {
              backgroundColor: "#F5B841"
            },
            headerLargeTitleStyle: {
              fontWeight: "bold",
            }
          }}/>

          <Stack.Screen 
          name='Resultado'
          component={Resultado}
          options={{
            title: "REUSLTADO",
            headerStyle: {
              backgroundColor: "#F5B841"
            },
            headerLargeTitleStyle: {
              fontWeight: "bold",
            }
          }}/>


        </Stack.Navigator>
      </NavigationContainer>
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
});

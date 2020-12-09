import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,  SafeAreaView, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Button } from 'react-native';
import InitialScreen from './App/Screens/InitialScreen';
import SignIn from './App/Screens/SignIn';
import SignUp from './App/Screens/SignUp';
import MapasCarregadores from './App/Screens/MapasCarregadores';
import MapasEstacionamento from './App/Screens/MapasEstacionamento';
import { Ionicons } from '@expo/vector-icons'; 
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu from './App/Screens/Menu';
import { DrawerContent } from './App/Screens/Menu';
import ChargerFilter from './App/Screens/ChargerFilter';

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const SignInStack = createStackNavigator();
const SignUpStack = createStackNavigator();
const MapasEStack = createStackNavigator();
const MapasCStack = createStackNavigator();
const ChargerFStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen =({navigation})=>(
  <HomeStack.Navigator screenOptions={{
    headerShown: false
  }}
  >
  <HomeStack.Screen name = " " component = {InitialScreen}/>
  </HomeStack.Navigator> 
);
const SignInStackScreen =({navigation})=>(
  <SignInStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#03989E'
    } , 
    headerTintColor:"white",
    headerBackTitleStyle:{
      fontWeight:"bold"
    }
  }}
  ><SignInStack.Screen name = "  " component = {SignIn}
        options={{
          headerLeft: () => (
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
              <Ionicons name="ios-menu" size={30} color="white" />
            </TouchableOpacity>
            </View>
          )
        }}
        />
      </SignInStack.Navigator> 
);
const SignUpStackScreen =({navigation})=>(
  <SignUpStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#03989E'
    } , 
    headerTintColor:"white",
    headerBackTitleStyle:{
      fontWeight:"bold"
    }
  }}
  ><SignUpStack.Screen name = " " component = {SignUp}
        options={{
          headerLeft: () => (
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
              <Ionicons name="ios-menu" size={30} color="white" />
            </TouchableOpacity>
            </View>
          )
        }}
        />
      </SignUpStack.Navigator> 
);

const MapasEStackScreen =({navigation})=>(
  <MapasEStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#03989E'
    } , 
    headerTintColor:"white",
    headerBackTitleStyle:{
      fontWeight:"bold"
    }
  }}
  ><MapasEStack.Screen name = " " component = {MapasEstacionamento}
        options={{
          headerLeft: () => (
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
              <Ionicons name="ios-menu" size={30} color="white" />
            </TouchableOpacity>
            </View>
          )
        }}
        />
      </MapasEStack.Navigator> 
);
const MapasCStackScreen =({navigation})=>(
  <MapasCStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#03989E'
    } , 
    headerTintColor:"white",
    headerBackTitleStyle:{
      fontWeight:"bold"
    }
  }}
  ><MapasCStack.Screen name = " " component = {MapasCarregadores}
        options={{
          headerLeft: () => (
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
              <Ionicons name="ios-menu" size={30} color="white" />
            </TouchableOpacity>
            </View>
          )
        }}
        />
      </MapasCStack.Navigator> 
);
const ChargerFStackScreen =({navigation})=>(
  <ChargerFStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#03989E'
    } , 
    headerTintColor:"white",
    headerBackTitleStyle:{
      fontWeight:"bold"
    }
  }}
  ><ChargerFStack.Screen name = " " component = {ChargerFilter}
        options={{
          headerLeft: () => (
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
              <Ionicons name="ios-menu" size={30} color="white" />
            </TouchableOpacity>
            </View>
          )
        }}
        />
      </ChargerFStack.Navigator> 
);

export default function App(){
  return (
  
    <NavigationContainer>
      
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={HomeStackScreen} />   
        <Drawer.Screen name="SignIn" component={SignInStackScreen} />
        <Drawer.Screen name="SignUp" component={SignUpStackScreen} />
        <Drawer.Screen name="MapasEstacionamento" component={MapasEStackScreen} />
        <Drawer.Screen name="MapasCarregadores" component={MapasCStackScreen} />
        <Drawer.Screen name="ChargerFilter" component={ChargerFStackScreen} />
      </Drawer.Navigator>
     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  button:{
    marginLeft:20
  }
});

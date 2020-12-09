import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,  SafeAreaView, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight } from 'react-native';
import InitialScreen from './App/Screens/InitialScreen';
import SignIn from './App/Screens/SignIn';

export default function App() {
  return <SignIn/>

    {/* <View style={styles.container}  > 
     <Text>First try :)</Text>
      <TouchableWithoutFeedback onPress = {() => console.log("first screen tapped")}> 
        <Image source={require('./App/assets/inicial.png')} 
          style={styles.backgroundImage} 
          />
      </TouchableWithoutFeedback>
    </View>*/}
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  }
});

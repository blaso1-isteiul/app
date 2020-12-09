import React from 'react';
import {StyleSheet, View, Text, Image, Background} from 'react-native';
function SignIn(props) {
    return (
        <View style={styles.container}>
     
        <Image style={styles.logo} source={require ("../assets/icone.png")}></Image> 
     <Text style={styles.texto}>Sign In</Text> 
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
    logo :{
        width:100,
        height:100,
        position:'absolute',
        top:70

    },
    texto:{
        //fontWeight: 'bold', 
        color: '#008080',
        fontSize: 30,
        position:'absolute',
        left:10,
        top:'25%'
        

    }
})
export default SignIn;
import { Button } from 'native-base';
import React from 'react';
import { Image, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons'; 


function InitialScreen({navigation}) {
    return (
        <View style={styles.container} >   
            <Image style={styles.imagem} source={require ("../assets/simbolo.png")}/>
            <Image style={styles.letras} source={require ("../assets/FindASpot.png")}/>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
                <LinearGradient
                    colors={['#008080', '#00ced1']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Iniciar Sessão</Text>
                    <AntDesign name="caretright" size={20} color="white" />

                </LinearGradient>
            </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#03989E', 
        justifyContent: 'center',
        alignItems: 'center'
      },
      imagem:{
          height:200,
          width:200,
          top:40
      },
      letras:{
      height:300,
      width:300,
      marginTop:5
      }, 
      button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: '80%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold', 
        position:'absolute',    
       }
      
});

export default InitialScreen;
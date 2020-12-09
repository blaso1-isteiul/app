import React from 'react';
import { ImageBackground, ImageBackgroundBase, StyleSheet, View } from 'react-native';

function InitialScreen(props) {
    return (
        <ImageBackground
        style={styles.background}
        source={require ("../assets/inicial.png")} 
        >
           {/* <View style={styles.loginButton}></View> */}

        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: "flex-end",
    },
   /* loginButton:  {
        width:'100%',
        height: 100,
        backgroundColor: '#fff'
    } */
})
export default InitialScreen;
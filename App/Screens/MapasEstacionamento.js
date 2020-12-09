import React from 'react';
import {StyleSheet, View, Text, Image, Background, TouchableOpacity, Dimensions, Platform} from 'react-native';

import MapView from 'react-native-maps';

function MapasEstacionamento({navigation}) {
   
    return (
     <View style={styles.container}>
       <View style={styles.header} > 
       <TouchableOpacity onPress={()=> navigation.navigate('MapasCarregadores')}>
        <Image 
            source={require ("../assets/1.png")}
            resizeMode="stretch"
            style={styles.logo} />
        </TouchableOpacity>
        <Text style={styles.text_header}></Text>
       </View>
       <View style={styles.footer} >
        <MapView style={styles.mapStyle} />
       </View>
     </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03989E',
    },
    header:{
        flex:1,
        justifyContent: 'flex-end',
        paddingHorizontal:20,
        paddingBottom:50
    }  ,
    footer:{
        flex:7,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:30
    } ,
    text_header:{
        color: '#fff',
        fontWeight:'bold',
        fontSize:28
    },
    
    logo:{
        width:80,
        height:80,
        marginLeft:250,
        top: 50 
    },
    mapStyle: {
      flex:1
    }
   
})
export default MapasEstacionamento;
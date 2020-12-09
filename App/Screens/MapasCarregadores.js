import React from 'react';
import {StyleSheet, View, Text, Image, Background, TouchableOpacity, Dimensions, Platform} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import MapView from 'react-native-maps';

function MapasCarregadores({navigation}) {
   
    return (
     <View style={styles.container}>
       <View style={styles.header} > 
       <TouchableOpacity onPress={()=> navigation.navigate('MapasEstacionamento')}>
        <Image 
            source={require ("../assets/chargerIcon.png")}
            resizeMode="stretch"
            style={styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.search} onPress={()=> navigation.navigate('ChargerFilter')} >
        <FontAwesome5 name="searchengin" size={25} color="white" />
        <Text style={styles.text_header}>Tipo de carregamento</Text>
        </TouchableOpacity>
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
        color: "white",
        fontSize:16,
        
    },
    
    logo:{
        width:80,
        height:80,
        marginLeft:250,
        top: 50 
    },
    mapStyle: {
        flex:1,
        
    },

    search:{
        flexDirection: 'row',
        top: -30,
    }
   
})
export default MapasCarregadores;
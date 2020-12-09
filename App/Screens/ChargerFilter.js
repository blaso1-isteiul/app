import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Background, TouchableOpacity, Dimensions} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

import SelectMultiple from 'react-native-select-multiple';
import { color } from 'react-native-reanimated';
const fruits = [
       { label: 'Normal', value: 'Normal' },
       {label :'Rápido', value: 'Rápido'}
     ]
     const tomadas = [
        { label: 'CHAdeMO', value: 'CHAdeMO' },
        {label :'Combo type 2 based', value: 'Combo type 2 based'},
        {label :'IEC 309-2 single phase', value: 'IEC 309-2 single phase'},
        {label :'Mennekes type 2', value: 'Mennekes type 2'},
        {label :'Standard', value: 'Standard'},
        {label :'Type 1', value: 'Type 1'},
      ]
const renderLabel = (label, style) => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
           <Text style={style}>{label}</Text>
      </View>
    )
  }
  
class ChargerFilter extends Component {

state = { selectedFruits: [] }

  onSelectionsChange = (selectedFruits) => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedFruits })
  }

render() {

    return (
    
     <View style={styles.container}>
       <View style={styles.header} > 
        <Image 
            source={require ("../assets/simbolo.png")}
            resizeMode="stretch"
            style={styles.logo} />
        <Text style={styles.text_header}>Características do carregamento</Text>
       </View>
       <View style={styles.footer} >
      
           <View>
           <Image 
            source={require ("../assets/2.png")}
            resizeMode="stretch"
            style={[styles.icon, { marginLeft:300}, {marginTop:25}]} />
            <Image 
            source={require ("../assets/1st.png")}
            resizeMode="stretch"
            style={[styles.icon, { marginLeft:300}, { marginTop:80}]} />
            <Image 
            source={require ("../assets/3.png")}
            resizeMode="stretch"
            style={[styles.icon, { marginLeft:300}, { marginTop:180}]} />
             <Image 
            source={require ("../assets/7.png")}
            resizeMode="stretch"
            style={[styles.icon, { marginLeft:300}, { marginTop:235}]} />
             <Image 
            source={require ("../assets/4.png")}
            resizeMode="stretch"
            style={[styles.icon, { marginLeft:300}, { marginTop:290}]} />
             <Image 
            source={require ("../assets/6.png")}
            resizeMode="stretch"
            style={[styles.icon, { marginLeft:300}, { marginTop:340}]} />
            <Image 
            source={require ("../assets/8.png")}
            resizeMode="stretch"
            style={[styles.icon, { marginLeft:300}, { marginTop:395}]} />
            <Image 
            source={require ("../assets/5.png")}
            resizeMode="stretch"
            style={[styles.icon, { marginLeft:300}, { marginTop:450}]} />
           </View>
           <View style={styles.ola}>
           <Text style={styles.texto}>Tipo de posto</Text>
        <SelectMultiple 
          items={fruits}
          renderLabel={renderLabel}
          selectedItems={this.state.selectedFruits}
          onSelectionsChange={this.onSelectionsChange} />
          </View>

          <View style={styles.ola2}>
           <Text style={styles.texto}>Tipo de tomada</Text>
           <SelectMultiple 
          items={tomadas}
          renderLabel={renderLabel}
          selectedItems={this.state.selectedFruits}
          onSelectionsChange={this.onSelectionsChange} />
           </View>


        <View style = {styles.button}>
        <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('MapasCarregadores')}
            style={[styles.singin, {
                borderColor: '#008080',
                borderWidth:1,
                marginTop:15
            }]}>
                <Text style={[styles.textSign, {
                    color: '#008080'
                }]}>Procurar</Text>
        </TouchableOpacity>
        </View>

        </View>
       </View>
        
   
    );
}}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03989E',
    
    },
    header:{
        flex:1,
        justifyContent: 'flex-end',
        paddingHorizontal:20,
        paddingBottom:50, 

    }  ,
    footer:{
        flex:12,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:30, 
        
    } ,
    text_header:{
        color: '#fff',
        fontWeight:'bold',
        fontSize:16
    },
    text_footer:{
        color:'#008080',
        fontSize:15
    },
    
    logo:{
        width:80,
        height:80,
        marginLeft:250,
        top: 60 
    },
    button :{
        alignItems:'center',
        marginTop:10
    },
    singin:{
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    textSign: {
        fontSize:18,
        fontWeight:'bold',
    },
    icon:{
        width:40,
        height:40,
      
         
        position: "absolute"
    }, 
    ola:{
        marginRight: 45,
        marginTop: -10
    },
    ola2:{
        marginRight: 45, 
        marginTop:20
    }, 
    texto:{
        fontWeight:'bold',
        color:'#03989E'
    }
   
})
export default ChargerFilter;

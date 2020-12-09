import React from 'react';
import {StyleSheet, View, Text, Image, Background, TouchableOpacity, Dimensions, Platform} from 'react-native';


import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { TextInput } from 'react-native-gesture-handler';
import { Octicons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { CheckBox } from "native-base"
function SignUp({navigation}) {
    
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        securityTextEntry: true,
        selectedLang:0
      
    });
    const textinputChange = (val) => {
        if (val.length != 0){
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        }else {
            setData ({
                ...data,
                email: val,
                check_textInputChange: false
            })
        }
    }
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }
    const updateSecureTextEntry =()=>{
        setData({
            ...data, 
            securityTextEntry: !data.securityTextEntry
        });
    }
   
   const check =()=>{
       setData({
           ...data,
           selectedLang:1
       })
    
   }
    return (
     <View style={styles.container}>
       <View style={styles.header} > 
        <Image 
            source={require ("../assets/simbolo.png")}
            resizeMode="stretch"
            style={styles.logo} />
        <Text style={styles.text_header}>Sign Up</Text>
       </View>
       <View style={styles.footer} >
        
        <Text style={[styles.text_footer,{marginTop:20}]}>Nome</Text>
        <View style={styles.action}>
         <MaterialIcons name="person-outline" size={20} color="black" />
         <TextInput 
            placeholder="O seu nome"
            style={styles.text_input}
            onChangeText = {(val)=>textinputChange(val)}
         /> 
            {data.check_textInputChange ?   
         <AntDesign name="check" size={20} color="green" />    
        : null}
        </View>
        <Text style={[styles.text_footer,{marginTop:20}]}>Email</Text>
        <View style={styles.action}>
         <AntDesign name="mail" size={20} color="black" />
         <TextInput 
            placeholder="O seu endereço de email"
            style={styles.text_input}
            onChangeText = {(val)=>textinputChange(val)}
         /> 
        {data.check_textInputChange ?   
        <AntDesign name="check" size={20} color="green" />    
        : null}
        </View>
         <Text style={[styles.text_footer,{marginTop:20}]}>Número de telemóvel</Text>
        <View style={styles.action}>
         <SimpleLineIcons name="screen-smartphone" size={20} color="black" />
         <TextInput 
            placeholder="O seu número de telemóvel"
            style={styles.text_input}
            onChangeText = {(val)=>textinputChange(val)}
         /> 
        {data.check_textInputChange ?   
        <AntDesign name="check" size={20} color="green" />    
        : null}
        </View>
         <Text style={[styles.text_footer, {marginTop: 20}]}>Password</Text>
        <View style={styles.action}>
         <AntDesign name="lock" size={20} color="black" />
         <TextInput 
            placeholder="A sua password"
            secureTextEntry={data.securityTextEntry ? true : false}
            style={styles.text_input} 
            onChangeText={ (val) => handlePasswordChange(val)}
         />
        <TouchableOpacity
         onPress = {updateSecureTextEntry}>  
         {data.securityTextEntry ? 
        <Octicons name="eye-closed" size={20} color="grey" /> 
          :
        <Octicons name="eye" size={20} color="grey" />
        }
        </TouchableOpacity>
        </View>
         <Text style={[styles.text_footer, {marginTop: 20}]}>Confirmação de Password</Text>
        <View style={styles.action}>
         <AntDesign name="lock" size={20} color="black" />
         <TextInput 
            placeholder="Confirme a sua password"
            secureTextEntry={data.securityTextEntry ? true : false}
            style={styles.text_input} 
            onChangeText={ (val) => handlePasswordChange(val)}
         />
         <TouchableOpacity
         onPress = {updateSecureTextEntry}>  
         {data.securityTextEntry ? 
        <Octicons name="eye-closed" size={20} color="grey" /> 
          :
        <Octicons name="eye" size={20} color="grey" />
        }
        </TouchableOpacity>
        </View>
        <View style={styles.item} >
         <CheckBox color="#008080" onPress={check}/>
         <Text style={styles.text_check}
         >Li e aceito os termos e condições de privacidade</Text>
</View>

        <View style = {styles.button}>
        <TouchableOpacity 
            style={styles.singin}
            onPress={()=>navigation.navigate('MapasEstacionamento')}
        >  
        <LinearGradient
            colors = {['#40e0d0', '#008080']}
            style = {[styles.singin, {
            marginTop:10            }]}
        > 
        <Text style={[styles.textSign,{
            color:'#fff'}]}>Confirmar</Text>
        </LinearGradient>
        </TouchableOpacity> 

        <TouchableOpacity>
                <Text style={{color: '#009387', marginTop:10}}>Já tem uma conta?</Text>
            </TouchableOpacity>
        </View>
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
        flex:8,
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
    text_footer:{
        color:'#008080',
        fontSize:15
    },
    text_input: {
        flex:1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft:10,
        color: '#05375a' 
    },
    button :{
        alignItems:'center',
        marginTop:5
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
        fontWeight:'bold'
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    }, 
    logo:{
        width:80,
        height:80,
        marginLeft:250,
        top: 60 
    },
    item:{
        marginTop:60,
        flexDirection:"row",
      },
      text_check:{
        fontSize:13,
        marginLeft:12,
        marginTop:2,
        color:'#a9a9a9'
      },
    
   
})
export default SignUp;
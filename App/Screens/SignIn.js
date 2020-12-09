import React from 'react';
import {StyleSheet, View, Text, Image, Background, TouchableOpacity, Dimensions, Platform} from 'react-native';


import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { TextInput } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

function SignIn({navigation}) {
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        securityTextEntry: true
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
    return (
     <View style={styles.container}>
       <View style={styles.header} > 
        <Image 
            source={require ("../assets/simbolo.png")}
            resizeMode="stretch"
            style={styles.logo} />
        <Text style={styles.text_header}>Sign In</Text>
       </View>
       <View style={styles.footer} >
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
        <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
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
        <View style = {styles.button}>

        <TouchableOpacity 
            style={styles.singin}
            onPress={()=>navigation.navigate('MapasEstacionamento')}
        >  
        <LinearGradient
            colors = {['#40e0d0', '#008080']}
            style = {[styles.singin, {
                marginTop:5            }]}
        > 
        <Text style={[styles.textSign,{
            color:'#fff'}]}>Sign In</Text>
        </LinearGradient>
        </TouchableOpacity>  


        <TouchableOpacity
            onPress={()=>navigation.navigate('SignUp')}
            style={[styles.singin, {
                borderColor: '#008080',
                borderWidth:1,
                marginTop:15
            }]}>
                <Text style={[styles.textSign, {
                    color: '#008080'
                }]}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity>
                <Text style={{color: '#009387', marginTop:15}}>Esqueceu-se da sua Password?</Text>
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
        marginTop:160
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
    }
   
})
export default SignIn;
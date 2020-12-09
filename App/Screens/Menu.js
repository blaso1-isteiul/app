import React from 'react';
import { StyleSheet, View, Image, Button , TouchableOpacity} from 'react-native';
import{
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRpple, Switch
} from 'react-native-paper';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Container } from 'native-base';
export function DrawerContent( {navigation}){
    return(
        <View style={{flex:1}}>
           <DrawerContentScrollView >
                <View style={styles.drawerContent}>
                    <View style={styles.userinfo}>
                        <View style={{flexDirection:'row', marginTop:15}}>
                            <Avatar.Image
                            source={{uri: 'https://chedidgrieco.com.br/wp-content/uploads/2016/11/nobody_m.original.jpg'}}
                            size={50}/>
                        <View style={{marginLeft:20, flexDirection:'column'}} >
                            <Title style={styles.title}>Full Name</Title>
                            <Caption style={styles.caption}>Username</Caption>
                        </View>
                    </View>
                </View>
                <Drawer.Section style = {styles.drawersection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="flash" 
                        color='#008080'
                        size={25}
                        />
                    )}
                    label="Be a Spotter"
                    onPress={() => {}}
                />
                 <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="credit-card-outline" 
                        color='#008080'
                        size={25}
                        />
                    )}
                    label="Pagamentos"
                    onPress={() => {}}
                />
                 <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="settings-outline" 
                        color='#008080'
                        size={25}
                        />
                    )}
                    label="Definições"
                    onPress={() => {}}
                />
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="logout-variant" 
                        color='#008080'
                        size={25}
                        />
                    )}
                    label="Terminar sessão"
                    onPress={() => navigation.navigate('SignIn')}
                />
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="help-circle-outline" 
                        color='#008080'
                        size={25}
                        />
                    )}
                    label="Ajuda"
                    onPress={() => {}}
                />
                </Drawer.Section>
                </View>
                <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="home-outline" 
                        color='#008080'
                        size={25}
                        />
                    )}
                    label="Voltar"
                    onPress={() => {navigation.navigate('Home')}}
                />
                
            </Drawer.Section>
           </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent:{
        flex:1,
        top: 30
    }, 
    userinfo:{
        paddingLeft:20,
    },
    title:{
        fontSize:20, 
        marginTop:3,
        fontWeight:'bold',
    },
    caption:{
        fontSize: 14,
        lineHeight: 14,
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight: 15,
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3,
    },
    bottomDrawerSection: {
        marginTop:300,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal:16

    },
    drawersection:{
        marginTop:50
    }
})
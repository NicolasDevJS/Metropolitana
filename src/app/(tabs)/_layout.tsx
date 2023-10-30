import { Drawer } from 'expo-router/drawer';
import React from 'react';
import {Entypo, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { View, StyleSheet, ImageBackground, Image, Text, TouchableOpacity, Button } from 'react-native';

export default function Layout(){
    return(
        <Drawer 
                screenOptions={{title: ' '}}

        >
            <Drawer.Screen 
                name="index"
                options={{
                    title:"AO VIVO",
                    headerTransparent: true,
                    headerTitle:"",
                    headerTintColor:'white',
                    drawerActiveTintColor: '#fff',
                    drawerInactiveTintColor: '#fff',
                    
                    drawerStyle: {
                        backgroundColor: '#2213f3',
                    },
                    headerStyle: {
                        height: 80, 
                      },
                      drawerIcon: () =>(
                        <Entypo name="controller-play" size={30} color="white" />
                      )
                }}
            />
            <Drawer.Screen
                name="ChooseSong"
                options={{
                    headerTransparent: true,
                    title:"PEÇA SUA MÚSICA",
                    headerTintColor:'white',
                    drawerActiveTintColor: '#fff',
                    drawerInactiveTintColor: '#fff',
                    
                    drawerStyle: {
                        backgroundColor: '#2213f3',
                    },
                    drawerIcon: () =>(
                    <MaterialCommunityIcons name="microphone" size={30} color="white" />
                      )

                }}
            />
                <Drawer.Screen
                name="WebRadio"
                options={{
                    headerTransparent: true,
                    headerTintColor:'white',
                    title:"WEB RÁDIOS",
                    drawerActiveTintColor: '#fff',
                    drawerInactiveTintColor: '#fff',
                    
                    drawerStyle: {
                        backgroundColor: '#2213f3',
                    },
                    drawerIcon: () =>(
                        <MaterialIcons name="radio" size={30} color="white" />
                      )
                }}
            />
                <Drawer.Screen
                name="SleepTimer"
                options={{
                    headerTransparent: true,
                    headerTintColor:'white',
                    title:"SLEEP TIMER",
                    drawerActiveTintColor: '#fff',
                    drawerInactiveTintColor: '#fff',
                    
                    drawerStyle: {
                        backgroundColor: '#2213f3',
                    },
                    drawerIcon: () =>(
                        <MaterialCommunityIcons name="clock-outline" size={30} color="white" />
                      )
                }}
            />
        </Drawer>
    )
}
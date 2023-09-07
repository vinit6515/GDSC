import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default function HomeScreen1(){
    return(<View style={styles.container}> 
        <Text>Welcome to the Home Screen!</Text>
      </View>);
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
     alignItems:'center',     
      backgroundColor: '#fff',
      justifyContent: 'center',
    }
    
  });


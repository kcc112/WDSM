import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, View, Text, Image } from 'react-native';


const ScoreScreen = () => {
    return (
        <View style = {styles.screen}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/logo.png')}
                    resizeMode='center'
                /> 
            </View>
        </View>
    )
};




const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: '-20%'
      }
});

export default ScoreScreen;
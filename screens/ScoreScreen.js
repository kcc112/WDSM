import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';


const ScoreScreen = props => {
    return (
        <View style = {styles.screen}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/logo.jpg')}
                    resizeMode='center'
                /> 
            </View>
            <Text style={styles.sumUp}>Summary</Text>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} title="Retry" color='black'></Button>
                <Button style={styles.button} title="Home" color='black' onPress={props.scoreVisiblitySetter}></Button>
            </View>
        </View>
    )
};




const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },

    logoContainer: {
        marginTop: '-20%',
    },

    sumUp: {
        fontSize: 25,
        marginTop: -50
    },

    buttonContainer: {
        flexDirection: "row",
        width: '70%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },

    button: {
        width: 100,
        
    },
    
});

export default ScoreScreen;
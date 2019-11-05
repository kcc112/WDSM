import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { VictoryBar, VictoryStack } from "victory-native";
import { Button } from 'react-native-elements'



const ScoreScreen = props => {

    const data = [
        { quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 }
    ];


    const retryHandler = () => {
        props.scoreVisiblitySetter();
        props.startAgain();

    };

    return (
        <View style={styles.screen}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/logo.jpg')}
                    resizeMode='center'
                />
            </View>
            <Text style={styles.sumUp}>Summary</Text>

            <VictoryStack
                colorScale={["green", "red" ]}
                animate={{
                    duration: 2000,
                    onLoad: { duration: 500 }
                  }}
                  horizontal = {true}
                  width={400}
                  
                  
            >
                <VictoryBar
                    data={[{ x: "1", y: 6}, { x: "2", y: 2 }]}
                    
                />
                <VictoryBar
                    data={[{ x: "1", y: 4 }, { x: "2", y: 8 }]}
                />
            </VictoryStack>

            <View style={styles.buttonContainer}>
                <Button buttonStyle={ styles.buttonColor } title="Retry" color='black' onPress={retryHandler}></Button>
                <Button buttonStyle={ styles.buttonColor } title="Home" color='black' onPress={props.scoreVisiblitySetter}></Button>
            </View>
        </View>
    );
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
        marginTop: '-10%'
    },

    buttonContainer: {
        flexDirection: "row",
        width: '70%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        
    },
    buttonColor: {
        borderRadius: 20,
        backgroundColor: '#b30c00',
        width: 100,
      },

});

export default ScoreScreen;
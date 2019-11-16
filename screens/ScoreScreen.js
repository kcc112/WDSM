import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { VictoryBar, VictoryStack, VictoryChart, VictoryAxis } from "victory-native";
import { Button } from 'react-native-elements'



const ScoreScreen = props => {

    const dataYes = [
        { id: 1, approvals: 3, name: "Fakultet1" },
        { id: 2, approvals: 9, name: "Fakultet2" },
        { id: 3, approvals: 7, name: "Fakultet3" },
        { id: 4, approvals: 5, name: "Fakultet4" }
    ];

    const dataNo = [
        { id: 1, approvals: 10-dataYes[0].approvals },
        { id: 2, approvals: 10-dataYes[1].approvals },
        { id: 3, approvals: 10-dataYes[2].approvals },
        { id: 4, approvals: 10-dataYes[3].approvals }
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

            <VictoryChart
                domainPadding={30}
                padding={{ left: 80, right: 30 }}
            >
                <VictoryAxis
                dependent Axis
                    tickValues={[1, 2, 3, 4]}
                    tickFormat={[dataYes[3].name, dataYes[2].name, dataYes[1].name, dataYes[0].name]}
                    
                />
                <VictoryStack
                    colorScale={["green", "red"]}
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 500 }
                    }}
                    horizontal={true}   
                >
                    <VictoryBar
                        data={dataYes}
                        
                        x="id"
                        y="approvals"
                        
                    />
                       <VictoryBar

                        data={dataNo}
                        x="id"
                        y="approvals"
                        labels={({ datum }) => ` ${(10-datum.approvals)/10 *100} %`}
                    />
 
                </VictoryStack>
            </VictoryChart>

            <View style={styles.buttonContainer}>
                <Button buttonStyle={styles.buttonColor} title="Retry" color='black' onPress={retryHandler}></Button>
                <Button buttonStyle={styles.buttonColor} title="Home" color='black' onPress={props.scoreVisiblitySetter}></Button>
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
        marginTop: '-20%'
    },

    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        width: '70%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,

    },
    buttonColor: {
        borderRadius: 20,
        backgroundColor: '#b30c00',
        width: 100,
    },

});

export default ScoreScreen;
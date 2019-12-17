import React from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import {
  VictoryBar,
  VictoryStack,
  VictoryChart,
  VictoryAxis
} from "victory-native";
import { Button } from "react-native-elements";

const ScoreScreen = props => {

  const retryHandler = () => {
    props.scoreVisiblitySetter();
    props.startAgain();
  };

  return (
    <View style={styles.screen}>
      <View style={{ height: 150, alignItems: "center"}}>
        <View style={{ marginTop: 50}}>
          <Text style={styles.sumUp}>Summary</Text>
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: "center" }}>
        <VictoryChart domainPadding={30} padding={{ left: 80, right: 30 }}>
          <VictoryAxis
            dependent
            Axis
            tickValues={[1, 2, 3, 4]}
            style={{ axis: {stroke: "none"} }}
            tickFormat={[
              props.dataYes[0].name,
              props.dataYes[1].name,
              props.dataYes[2].name,
              props.dataYes[3].name,
            ]}
          />

          <VictoryStack
            colorScale={["green", "white"]}
            horizontal={true}
          >
            <VictoryBar name="Bar-1"
             cornerRadius={{ top: 6, bottom: 6 }}
             data={props.dataYes}
             x="id"
             y="approvals"
             animate={{ duration: 500 }}
             labels={({ datum }) => `${((datum.approvals) / 4) * 100} %` }
             events={[{
              childName: "Bar-1",
              target: "data",
              eventHandlers: {
                onPressIn: (evt, clickedProps) => Alert.alert(`(${clickedProps.datum.name})` ,`(${clickedProps.datum.fullName})`)
              }
            }]}

          
            />
            <VictoryBar
              data={props.dataNo}
              x="id"
              y="approvals"
              animate={{ duration: 500 }}
            />
          </VictoryStack>
        </VictoryChart>
      </View>

      <View style={{ height: 60, alignItems: "center" }}>
        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={styles.buttonColor}
            title="Retry"
            color="black"
            onPress={() => {
              retryHandler();
            }}
          ></Button>
          <Button
            buttonStyle={styles.buttonColor}
            title="Home"
            color="black"
            onPress={() => { 
              props.scoreVisiblitySetter();
            }}
          ></Button>
          <Button
            buttonStyle={styles.buttonColor}
            title="Info"
            color="black"
            onPress={ props.redirectToWebsite }
          ></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },

  sumUp: {
    fontSize: 40,
    fontWeight: "bold"
  },

  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15
  },

  buttonColor: {
    borderRadius: 20,
    backgroundColor: "#b30c00",
    width: 100
  }
});

export default ScoreScreen;

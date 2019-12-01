import React, { useState } from "react";
import { Button } from "react-native-elements";
import { Questions } from "./Questions"
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  PanResponder,
  Modal
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const rotate = position => {
  return position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: ["-10deg", "0deg", "10deg"],
    extrapolate: "clamp"
  });
};

const likeOpacity = position => {
  return position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [0, 0, 1],
    extrapolate: "clamp"
  });
};

const dislikeOpacity = position => {
  return position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0, 0],
    extrapolate: "clamp"
  });
};

const nextCardOpacity = position => {
  return position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0, 1],
    extrapolate: "clamp"
  });
};

const Start = props => {
  const [position, setPosition] = useState(new Animated.ValueXY());

  const rotateAndTranslate = {
    transform: [
      { rotate: rotate(position) },
      ...position.getTranslateTransform()
    ]
  };

  const panResponder = React.useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,

        onPanResponderMove: (_evt, gestureState) => {
          setPosition(
            new Animated.ValueXY({ x: gestureState.dx, y: gestureState.dy })
          );
        },

        onPanResponderRelease: (_evt, gestureState) => {
          if (gestureState.dx > 120) {
            props.setAprovalYes();
            Animated.spring(
              position,
              setPosition(
                new Animated.ValueXY({
                  x: SCREEN_WIDTH + 100,
                  y: gestureState.dy
                })
              )
            ).start(
              props.onSetIndex(index => index + 1),
              setPosition(new Animated.ValueXY())
            );
          } else if (gestureState.dx < -120) {
            props.setAprovalNo();
            Animated.spring(
              position,
              setPosition(
                new Animated.ValueXY({
                  x: -SCREEN_WIDTH - 100,
                  y: gestureState.dy
                })
              )
            ).start(
              props.onSetIndex(index => index + 1),
              setPosition(new Animated.ValueXY())
            );
          } else {
            setPosition(new Animated.ValueXY());
          }
        }
      }),
    []
  );

  const renderQuestions = () => {
    
    return Questions.map((item, i) => {
      if (i < props.index) {
        return null;
      } else if (i == props.index) {
        return (
          <Animated.View
            {...panResponder.panHandlers}
            key={i}
            style={[rotateAndTranslate, styles.mainView]}
          >
            <Animated.View
              style={[styles.likeContainer, { opacity: likeOpacity(position) }]}
            >
              <Text style={styles.likeText}>LIKE</Text>
            </Animated.View>

            <Animated.View
              style={[
                styles.dislikeContainer,
                { opacity: dislikeOpacity(position) }
              ]}
            >
              <Text style={styles.dislikeText}>NOPE</Text>
            </Animated.View>

            <Image source={item.uri} style={styles.image} />
          </Animated.View>
        );
      } else {
        return (
          <Animated.View
            key={i}
            style={[styles.mainView, { opacity: nextCardOpacity(position) }]}
          >
            <Image source={item.uri} style={styles.image} />
          </Animated.View>
        );
      }
    }).reverse();
  };

  const rendetQuestionText = () => {
    if (props.index < Questions.length) {
      return <Text style={{fontSize: 16}}>{Questions[props.index].text}</Text>;
    } else {
      return null;
    }
  };

  if (props.index < Questions.length) {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={{ flex: 1 }}>
        <View style={{ height: 100, alignItems: "center" , paddingTop: 30}}>
          <View style={{ width: '100%', flexGrow: 1, flex: 1, alignItems: 'center' }}>{rendetQuestionText()}</View>
        </View>
        <View style={{ flex: 1, width: '90%', height: '90%'}}>{renderQuestions()}</View>
        <View style={{ height: 60, alignItems: "center" }}>
          <View style={{ flex: 1, width: "50%" }}>
            <Button
              title="back"
              onPress={props.onHandleSetVisibleOf}
              buttonStyle={styles.button}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
  } else {
    
    props.onHandleSetVisibleOf();
    props.scoreScreen();
    return null;
    
  }
};

const styles = StyleSheet.create({
  sceen : {
    flex : 1,
  },

  mainView: {
    height: SCREEN_HEIGHT - 120,
    width: SCREEN_WIDTH,
    padding: 10,
    position: "absolute"
  },

  likeContainer: {
    position: "absolute",
    zIndex: 1000,
    top: 40,
    left: 30,
    transform: [{ rotate: "-30deg" }]
  },

  dislikeContainer: {
    position: "absolute",
    zIndex: 1000,
    top: 40,
    right: 30,
    transform: [{ rotate: "30deg" }]
  },

  likeText: {
    borderWidth: 1,
    borderColor: "#39e600",
    color: "#39e600",
    fontSize: 32,
    fontWeight: "800",
    padding: 10
  },

  dislikeText: {
    borderWidth: 1,
    borderColor: "red",
    color: "red",
    fontSize: 32,
    fontWeight: "800",
    padding: 10
  },

  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover",
    borderRadius: 20
  },

  button: {
    top: 17,
    borderRadius: 20,
    backgroundColor: "#b30c00"
  }
});

export default Start;

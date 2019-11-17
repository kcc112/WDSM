import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button } from 'react-native-elements'
import * as WebBrowser from 'expo-web-browser';
import Start from './components/Start'
import ScoreScreen from "./components/ScoreScreen"
import { Questions } from "./components/Questions"


export default function App() {
  const [isVisible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  let [indexForQuestion, setIndexForQuestion] = useState(0);
  const [dataYes, setDataYes] = useState([
    { id: 1, approvals: 0, name: "DGK" },
    { id: 2, approvals: 0, name: "WDSM"},
    { id: 3, approvals: 0, name: "IRZ" },
    { id: 4, approvals: 0, name: "WZAIP" }
  ]);
  const [dataNo, setDataNo] = useState([
    { id: 1, approvals: 4, name: "DGK" },
    { id: 2, approvals: 4, name: "WDSM" },
    { id: 3, approvals: 4, name: "IRZ" },
    { id: 4, approvals: 4, name: "WZAIP" }
  ]);
  const [scoreVisiblity, setScoreVisibility] = useState(false);

  const setAprovalYes = () => {
    const name = Questions[indexForQuestion].name
    dataYes.find(item => item.name === name).approvals += 1;
    dataNo.find(item => item.name === name).approvals -= 1;
    indexForQuestion += 1
  }

  const setAprovalNo = () => {
    indexForQuestion += 1
  }

  const handleStartButtonClick = () => {
    setIndex(0);
    setVisible(true);
  };

  const handleSetVisibleOf = () => {
    setVisible(false);
  };

  const previousResultHandler = () => {
    if(scoreVisiblity == false) {
      setScoreVisibility(true);
    }
    else {
      setScoreVisibility(false);
    }

  };


  const redirectToWebsite = () => {
    WebBrowser.openBrowserAsync('https://programy.p.lodz.pl/ectslabel-web/?l=pl&s=programKsztalcenia&pk=informatyka')
  };


  if (!scoreVisiblity)
    return (
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./assets/logo.jpg')}
            style={{flex: 1, height: null, width: null, resizeMode: 'cover'}}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='Start'
              buttonStyle={ styles.buttonColor }
              onPress={ handleStartButtonClick }
            />
          </View>
          <View style={styles.button}>
            <Button
              title='Results'
              buttonStyle={ styles.buttonColor }
              onPress={ previousResultHandler }
            />
          </View>
          <View style={styles.button}>
            <Button
              buttonStyle={ styles.buttonColor }
              title='Info'
              onPress={ redirectToWebsite } 
            />
          </View>
        </View>
        <Start
          visible={ isVisible }
          onHandleSetVisibleOf={ handleSetVisibleOf }
          index={ index }
          onSetIndex={ setIndex }
          startAgain={ handleStartButtonClick }
          scoreVisiblitySetter={ previousResultHandler }
          setAprovalYes={ setAprovalYes }
          setAprovalNo={ setAprovalNo }
        />
      </View>
    );
  else {
    return (
    <View style={styles.sceen}>
      <ScoreScreen
        setDataYes={ setDataYes }
        setDataYesNo={ setDataNo }
        dataYes={ dataYes }
        dataNo={ dataNo }
        startAgain={ handleStartButtonClick }
        scoreVisiblitySetter={ previousResultHandler }
      />
    </View>)
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column'
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  logoContainer: {
    flex: 1
  },

  button: {
    width: '50%',
    marginTop: '5%',
  },

  buttonColor: {
    borderRadius: 20,
    backgroundColor: '#b30c00'
  },

  sceen : {
    flex : 1,
  }
});

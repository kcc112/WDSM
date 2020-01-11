import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button } from 'react-native-elements'
import * as WebBrowser from 'expo-web-browser';
import Start from './components/Start'
import ScoreScreen from "./components/ScoreScreen"
import { Questions } from "./components/Questions"

const startYesArrayClean = [
  { id: 1, approvals: 0, name: "TPA" , fullName: "Technologie programowania adaptacyjnego", url: "https://programy.p.lodz.pl/ectslabel-web/przedmiot_1.jsp?l=pl&idPrzedmiotu=159897&pkId=100&s=6&t=1&j=0&w=informatyka"},
  { id: 2, approvals: 0, name: "PBS" , fullName: "Podstawy bezpieczeństwa systemów", url: "https://programy.p.lodz.pl/ectslabel-web/przedmiot_1.jsp?l=pl&idPrzedmiotu=159894&pkId=100&s=6&t=1&j=0&w=informatyka"},
  { id: 3, approvals: 0, name: "ZZP" , fullName: "Zaawansowane zagadnienia programowania", url: "https://programy.p.lodz.pl/ectslabel-web/przedmiot_1.jsp?l=pl&idPrzedmiotu=159900&pkId=100&s=6&t=1&j=0&w=informatyka"},
  { id: 4, approvals: 0, name: "WZAIP" , fullName: "Wybrane zagadnienia algorytmiki i programowania", url: "https://programy.p.lodz.pl/ectslabel-web/przedmiot_1.jsp?l=pl&idPrzedmiotu=159899&pkId=100&s=6&t=1&j=0&w=informatyka"}
];

const startNoArrayClean = [
  { id: 1, approvals: 4, name: "TPA" , fullName: "Technologie programowania adaptacyjnego"},
  { id: 2, approvals: 4, name: "PBS" , fullName: "Podstawy bezpieczeństwa systemów"},
  { id: 3, approvals: 4, name: "ZZP" , fullName: "Zaawansowane zagadnienia programowania"},
  { id: 4, approvals: 4, name: "WZAIP" , fullName: "Wybrane zagadnienia algorytmiki i programowania"}
];

const startYesArray = []
const startNoArray = []
for(var i=0; i<startNoArrayClean.length; i++){
  startYesArray[i]=Object.assign({}, startYesArrayClean[i]);
  startNoArray[i]=Object.assign({}, startNoArrayClean[i]);
}



export default function App() {
  const [isVisible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  let [indexForQuestion, setIndexForQuestion] = useState(0);
  const [dataYes, setDataYes] = useState(startYesArray);
  const [dataNo, setDataNo] = useState(startNoArray);
  const [scoreVisiblity, setScoreVisibility] = useState(false);

  const setAprovalYes = () => {
    const name = Questions[indexForQuestion].name;
    dataYes.find(item => item.name === name).approvals += 1;
    dataNo.find(item => item.name === name).approvals -= 1;
    indexForQuestion += 1;
  }

  const setAprovalNo = () => {
    indexForQuestion += 1
  }

  const handleStartButtonClick = () => {
    setIndex(0);

    for(var i=0; i<dataYes.length; i++){
      dataYes[i].approvals=0;
      dataNo[i].approvals=4;
    }


    setVisible(true);
  };

  const handleSetVisibleOf = () => {
    setVisible(false);
  };

  const previousResultHandler = () => {
    if(scoreVisiblity == false) {
      setIndex(0);
      setScoreVisibility(true);
    }
    else {
      setScoreVisibility(false);
    }

  };


  const redirectToWebsite = () => {
    WebBrowser.openBrowserAsync('https://programy.p.lodz.pl/ectslabel-web/kierunekSiatka.jsp?l=pl&s=programSiatka&w=informatyka&p=5613&v=1&pkId=100&stopien=studia+pierwszego+stopnia&sp=1')
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
          scoreScreen = { previousResultHandler }
        />
      </View>
    );
  else {
    return (
    <View style={styles.sceen}>
      <ScoreScreen
        dataYes={ dataYes }
        dataNo={ dataNo }
        startAgain={ handleStartButtonClick }
        scoreVisiblitySetter={ previousResultHandler }
        redirectToWebsite={ redirectToWebsite } 
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

import React, { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Button } from 'react-native-elements'
import * as WebBrowser from 'expo-web-browser';
import Start from './components/Start'
import ScoreScreen from './screens/ScoreScreen'

export default function App() {
  const [isVisible, setVisible] = useState(false);
  const [scoreVisiblity, setScoreVisibility] = useState(false);

  const handleSetVisibleOn = () => {
    setVisible(true)
  }

  const handleSetVisibleOf = () => {
    setVisible(false)
  }

  const previousResultHandler = () => {
    setScoreVisibility(true);

  };


  const redirectToWebsite = () => {
    WebBrowser.openBrowserAsync('https://programy.p.lodz.pl/ectslabel-web/?l=pl&s=programKsztalcenia&pk=informatyka')
  }

  if (!scoreVisiblity)
    return (
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./assets/logo.png')}
            resizeMode='center'
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='Start'
              buttonStyle={styles.buttonColor}
              onPress={handleSetVisibleOn}
              type='outline'
            />
          </View>
          <View style={styles.button}>
            <Button
              buttonStyle={styles.buttonColor}
              title='Previous result'
              type='outline'
              onPress={previousResultHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              buttonStyle={styles.buttonColor}
              title='Info'
              onPress={redirectToWebsite}
              type='outline'
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Text>Authors: Kamil Celejewski, Mateusz Wasilewski, Jędrzej Dobrucki</Text>
        </View>
        <Start
          visible={isVisible}
          onHandleSetVisibleOf={handleSetVisibleOf}
        />
      </View>
    );
  else {
    return (
    <View style={styles.sceen}>
    <ScoreScreen/>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '-20%'
  },

  button: {
    width: '50%',
    marginTop: '5%',
  },

  buttonColor: {
    borderWidth: 3,
    borderRadius: 20,
  },

  footer: {
    height: 60,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  sceen : {
    flex : 1,
  }
});

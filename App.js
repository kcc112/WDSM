import React, { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Button } from 'react-native-elements'
import * as WebBrowser from 'expo-web-browser';
import Start from './components/Start'
import ScoreScreen from './screens/ScoreScreen'

export default function App() {
  const [isVisible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [scoreVisiblity, setScoreVisibility] = useState(false);

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

// <<<<<<< HEAD
//   return (
//     <View style={ styles.mainContainer }>
//       <View style={ styles.logoContainer }>
//         <Image
//           source={ require('./assets/logo.jpg') }
//           style={{flex: 1, height: null, width: null, resizeMode: 'cover'}}
//         />
//       </View>
//       <View style={ styles.buttonContainer }>
//         <View style={ styles.button }>
//           <Button
//             title='Start'
//             buttonStyle={ styles.buttonColor }
//             onPress={ handleStartButtonClick }
//           />
//         </View>
//         <View style={ styles.button }>
//           <Button
//             buttonStyle={ styles.buttonColor }
//             title='Previous result'
//           />
//         </View>
//         <View style={ styles.button }>
//           <Button
//             buttonStyle={ styles.buttonColor }
//             title='Info'
//             onPress={ redirectToWebsite } 
//           />
//         </View>
//       </View>
//       <Start
//         visible={ isVisible }
//         onHandleSetVisibleOf={ handleSetVisibleOf }
//         index={ index }
//         onSetIndex={ setIndex }
//       />
//     </View>
//   );
// =======
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
              title='Previous result'
              buttonStyle={ styles.buttonColor}
              onPress={previousResultHandler}
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
        />
      </View>
    );
  else {
    return (
    <View style={styles.sceen}>
      <ScoreScreen scoreVisiblitySetter={previousResultHandler}/>
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

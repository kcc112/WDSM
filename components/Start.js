import React from 'react';
import { Button } from 'react-native-elements'
import { 
    StyleSheet,
    View,
    Modal,
    Image,
    Dimensions,
    Animated,
} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const Mems = [
    { id: '1', uri: require('../assets/test.png') },
    { id: '2', uri: require('../assets/test.png') },
    { id: '3', uri: require('../assets/test.png') },
    { id: '4', uri: require('../assets/test.png') },
    { id: '5', uri: require('../assets/test.png') },
]

rendetImages = () => {
    return Mems.map((item, i) => {
        return(
        <Animated.View key={ item.id } style={ styles.imageContainer }>
            <Image 
            source={ item.uri }
            style={ styles.image }
            />
       </Animated.View>  
        );
    })
}
 
const Start = props => {

  return(
    <Modal visible={ props.visible } animationType='slide'>
      <View style={ styles.mainContainer }>
        <View style={ styles.top }>
            {/* top */}
        </View>
        <View style={ styles.pictureContainer }>
          { this.rendetImages() }
        </View>
        <View style={ styles.bottom }>
            <Button 
              title='back'
              onPress={ props.onHandleSetVisibleOf }
              type='outline'
              buttonStyle={ styles.button }
            />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
    },

    pictureContainer: {
      flex: 1,
    },

    image: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'cover',
        borderRadius: 20
    },

    imageContainer: {
        height:SCREEN_HEIGHT - 150,
        width: SCREEN_WIDTH,
        padding: 5,
        position: 'absolute'
    },

    top: {
        height: 60
    },

    bottom: {
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        width: 100,
        borderWidth: 3,
        borderRadius: 20,
      }
  });

export default Start;
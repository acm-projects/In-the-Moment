import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { View, Image } from 'react-native';

const PopupPage = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#8CBBF1', '#9769E1']}
      style={styles.Background}
      start={{x: -1, y: 0}}>
      <View style={styles.ImageBackground}>
        <Image
          style={styles.Image}
          source={require('../assets/images/Saly-43.png')}
        />
      </View>
      <TouchableOpacity onPress={() => {navigation.navigate('prePopupPage')}}>
        <Text style={styles.Text}>YOU ARE IN THE{'\n'}{'\t'} MOMENT ! {'\n'}{'\n'}{'\n'}{'\t'} REFLECT ?
        {'\n'}{'\n'}{'\n'}GET BACK INTO{'\n'}  THE MOMENT
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  Background: {
    width: '100%',
    height: '100%',
    display: 'flex',
  }, 
  Image: {
    resizeMode: 'contain',
    aspectRatio: 1,
    height: 208,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 130,
  },
  ImageBackground: {
    
  },
  Text: {
    fontSize: 25,
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 175,
  }
});

export default PopupPage;

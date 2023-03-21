import {StyleSheet, TouchableOpacity} from 'react-native';
import {View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const PrePopupPage = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity style={styles.BottomView} onPress={() => {navigation.navigate('popupPage')}}>
        <LinearGradient colors={['#8CBBF1', '#9769E1']} style={styles.Bottom} >
          <View style={styles.ImageBackground}>
            <Image
              style={styles.Image}
              source={require('../assets/images/Saly-43.png')}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default PrePopupPage;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'column',
    display: 'flex',
    flex: 1,
  },
  Bottom: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginTop: 550,
  },
  BottomView: {
    width: 300,
    height: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  Image: {
    resizeMode: 'contain',
    aspectRatio: 1,
    height: 208,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
  },
  ImageBackground: {},
});

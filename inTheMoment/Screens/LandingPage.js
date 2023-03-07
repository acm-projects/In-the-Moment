import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import '../assets/images/Saly-14.png';
const LandingPage = ({navigation}) => {

  return (
    <LinearGradient
      colors={['#9CB6EA', '#FF9BC3']}
      style={styles.Background}
      start={{x: 0, y: 0.3}}>
      <View style={styles.mainView}>
        <View style={styles.TopText}>
          <Text style={styles.Text}>
            {'   '}Welcome to{'\n'}
            In-the-Moment
          </Text>
        </View>
        <View style={styles.ImageBackground}>
          <Image
            style={styles.Image}
            source={require('../assets/images/Saly-14.png')}
          />
        </View>
        <View style={styles.BottomView}>
          <Text style={styles.Heading}>
            {'  '}Make an account or{'\n'}
            sign-in to get started
          </Text>
          <LinearGradient style={styles.Button} colors={['#F97794', '#A771FF']}>
            <Button
              color={'white'}
              title={`GET STARTED!`}
              onPress={() => {navigation.navigate('signUp')}}
            />
          </LinearGradient>
          <Text
            onPress={() => {navigation.navigate('signIn')}}
            style={styles.SignIn}>
            Sign In
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
  },
  Background: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  TopText: {
    marginTop: 60,
  },
  Text: {
    fontSize: 36,
    color: 'white',
    alignContent: 'center',
    justifyContent: 'center',
  },
  BottomView: {
    width: '100%',
    height: '35%',
    backgroundColor: 'white',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    alignContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  Heading: {
    backgroundColor: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 37,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 40,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
  },
  Image: {
    resizeMode: 'contain',
    aspectRatio: 1,
    height: 400,
    marginTop: 0,
  },
  ImageBackground: {
    flex: 1,
  },
  Button: {
    width: '70%',
    borderRadius: 17,
    marginTop: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 6,
  },
  SignIn: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
});

{
  /*
Image: {
    resizeMode: 'contain',
    aspectRatio: 1,
    height: 400,
  },
  ImageBackground: {
    flex: 1,
    marginTop: 50,
    alignSelf: 'center',
    alignContent: 'flex-end',
    backgroundColor: 'white',
  } */
}

export default LandingPage;

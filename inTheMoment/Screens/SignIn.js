import React, { useState } from 'react';
import {StyleSheet,SafeAreaView, View, Text, Button, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Realm from 'realm'
import app from '../backend/realmApp';


const SignIn = ({navigation}) => {

  const [user, setUser] = useState(app.currentUser || null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try{
      const creds = Realm.Credentials.emailPassword(email, password);
      const newUser = await app.logIn(creds);
      setUser(newUser);
      console.log("Successfully logged in user:", user.id);
      return user;
    }catch (err){
      console.log("Failed to log in", err.message);
    }
  };

  return (
    <LinearGradient
      colors={['#9CB6EA', '#FF9BC3']}
      style={styles.Background}
      start={{x: 0, y: 0.3}}>
      <View style={styles.mainView}>
        <View style={styles.TopText}>
          <Text style={styles.Text}>
            {'\t\t\t\t'}Get{'\n'}
            In-the-Moment
          </Text>
          <Text style={styles.Text2}>Sign in to your account</Text>
        </View>
        <View style={styles.FormView}>
          <TextInput style={styles.TextInput} placeholder={'Email'} 
            onChangeText={setEmail}
            value={email}
          />
          <TextInput style={styles.TextInput} placeholder={'Password'} 
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry 
          />
        </View>
        <Text style={styles.Text3}>Forgot your password?</Text>
        <View style={styles.BottomView}>
          <Text style={styles.Text4}>Sign In</Text>
          <LinearGradient
            style={styles.Button}
            colors={['#F97794', '#7642A0']}
            >
            <Button color={'white'} title={` `} 
              onPress={() => {
                signIn().then(() => {
                  navigation.navigate('homePage');
                });
              }}
            />
          </LinearGradient>
        </View>
        <Text style={styles.Text5} onPress={() => {navigation.navigate('signUp')}}>
          Don't have an account? Create
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  Background: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  mainView: {
    flexDirection: 'column',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
  },
  TopText: {
    marginTop: 250,
  },
  Text: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  Text2: {
    fontSize: 15,
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
  },
  Text3: {
    fontSize: 13,
    color: 'white',
    marginLeft: 'auto',
    marginRight: 43,
    marginBottom: 10,
  },
  Text4: {
    fontSize: 25,
    color: 'white',
    marginLeft: 'auto',
    fontWeight: '500',
    marginTop: 0,
    marginRight: 5,
  },
  Text5: {
    fontSize: 13,
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 120,
    textDecorationLine: 'underline',
  },
  FormView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  TextInput: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    padding: 13,
    borderRadius: 40,
    marginTop: 15,
    marginBottom: 15,
  },
  Button: {
    width: 56,
    height: 34,
    borderRadius: 17,
    padding: 2,
  },
  BottomView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginLeft: 'auto',
    marginRight: 43,
    marginTop: 50,
  },
});

export default SignIn;
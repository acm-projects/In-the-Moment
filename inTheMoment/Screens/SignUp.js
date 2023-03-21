import React, { useState } from 'react';
import {StyleSheet, View, Text, Button, TextInput, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import app from '../backend/realmApp';




const SignUp = ({navigation}) => {

  const [user, setUser] = useState(app.currentUser || null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
    
  
  const signUp = async() =>{
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    const regPassword = /^[a-zA-Z0-9]{6,}$/;

    if(reg.test(email) === false){
      Alert.alert(
        "Email",
        "Please insert a valid email",
        [
          {text: "OK", onPress: () => console.log("OK pressed")}
        ]
      );
    }

    else if (password === null || regPassword.test(password) === false){
      Alert.alert(
        "Password",
        "Please enter a password of minimum 6 characters",
        [
          { text: "OK", onPress: () => console.log("OK pressed") }
        ]
      );
    }
    else{
      await app.emailPasswordAuth.registerUser({email, password}); 
      Alert.alert(
        "Confirm User",
        "An email has been sent to you in order to confirm your email",
        [
          { text: "OK", onPress: () => console.log("OK pressed")}
        ]
      );
    }
  };


  return (
    <LinearGradient
      colors={['#9CB6EA', '#FF9BC3']}
      style={styles.Background}
      start={{x: 0, y: 0.3}}>
      <View style={styles.mainView}>
        <View style={styles.TopText}>
          <Text style={styles.Text}>Create an Account!</Text>
        </View>
        <View style={styles.FormView}>
          <TextInput style={styles.TextInput} placeholder={'Username'} 
            onChangeText={setUsername}
            value={username}
          />
          <TextInput style={styles.TextInput} placeholder={'Password'} 
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry
          />
          <TextInput style={styles.TextInput} placeholder={'E-mail'} 
            onChangeText={setEmail}
            value={email}
          />
        </View>
        <View style={styles.BottomView}>
          <Text style={styles.Text4}>Get Started</Text>
          <LinearGradient
            style={styles.Button}
            colors={['#F97794', '#7642A0']}
            >
            <Button color={'white'} title={` `} 
              onPress={signUp} 
            />
          </LinearGradient>
        </View>
        <Text style={styles.Text5} onPress={() => {navigation.navigate('signIn')}}>
          Already have an account? Login
        </Text>
        <Text style={styles.Text6} onPress={() => {navigation.navigate('landingPage')}}>
          Go back
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
    marginTop: 200,
  },
  Text: {
    fontSize: 30,
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
  Text6: {
    fontSize: 13,
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
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
    marginTop: 20,
    marginBottom: 20,
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
    marginTop: 100,
  },
});

export default SignUp;
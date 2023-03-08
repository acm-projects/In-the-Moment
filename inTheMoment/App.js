import LandingPage from './Screens/LandingPage';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import React from 'react';
import Realm from 'realm';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="landingPage"
          component={LandingPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signUp"
          component={SignUp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

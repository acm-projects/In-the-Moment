import LandingPage from './Screens/LandingPage';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PopupPage from './Screens/PopupPage';
import PrePopupPage from './Screens/PrePopupPage';
import ProfilePage from './Screens/ProfilePage';
import MapScreen from './Screens/MapScreen';
import HomePage from './Screens/HomePage';
import RestrictedApps from './Screens/RestrictedApps';
import { CardStyleInterpolators } from '@react-navigation/stack';

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
        <Stack.Screen
          name="homePage"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="profilePage"
          component={ProfilePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="restrictedApps"
          component={RestrictedApps}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="prePopupPage"
          component={PrePopupPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="popupPage"
          component={PopupPage}
          options={{headerShown: false , cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

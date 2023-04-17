import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screenNames from './navigation/screenNames';

//Components
import SignIn from './components/SignIn';
import SignInSuccess from './components/SignInSuccess';
import CameraView from './components/CameraView';

const Stack = createNativeStackNavigator();

export default class App extends Component {  
  
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name={screenNames.SignInScreen}
            component={SignIn}
            options={{ header: () => null }}
          />
          <Stack.Screen 
            name={screenNames.SignInSuccessScreen}
            component={SignInSuccess}
            options={{ header: () => null }}
          />
          <Stack.Screen 
            name={screenNames.CameraScreen}
            component={CameraView}
            options={{ header: () => null }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
 
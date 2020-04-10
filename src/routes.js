// import React from 'react';

import '@react-navigation/native';
import { createSwitchNavigator } from '@react-navigation/compat';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';

export default (signedIn = false) =>
  createSwitchNavigator(
    {
      Sign: createSwitchNavigator({ SignIn }),
    },
    {
      initialRouteName: signedIn ? 'App' : 'Sign',
    }
  );

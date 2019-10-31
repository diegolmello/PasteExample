import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {enableScreens} from 'react-native-screens';

// Uncomment next line to see it working
enableScreens();

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text selectable>COPY_ME</Text>
        <TextInput placeholder={'Paste it here'} />
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

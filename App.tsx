// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import pageList from './src/pageList.js';

const Stack = createNativeStackNavigator();

function App() {
  const renderScreens = () => {
    return pageList
      .filter(el => el.showOnMenu)
      .map(screen => (
        <Stack.Screen
          name={screen.name}
          component={screen.component}
          key={screen.name}
          options={{headerShown: false}}
        />
      ));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>{renderScreens()}</Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

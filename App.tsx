import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './src/router/MainStack';
import { Store } from './src/redux';
import { Provider as ReduxProvider } from 'react-redux';

function App(): React.JSX.Element {
  return (
    <ReduxProvider store={Store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </ReduxProvider>
  );
}

export default App;

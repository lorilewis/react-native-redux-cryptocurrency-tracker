import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/Store.js';
import { Header, CryptoContainer } from './src/components';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
      <View>
      <Header />
      <CryptoContainer />
      </View>
      </Provider>
    );
  }
}

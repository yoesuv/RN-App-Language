import React from 'react';
import { Provider } from 'react-redux';

import store from './src/redux/store'
import AppContainer from './src/navigation';

const configureStore = store();

export default function App() {
  return (
    <Provider store={configureStore} >
      <AppContainer />
    </Provider>
  );
}

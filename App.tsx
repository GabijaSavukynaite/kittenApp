import React from 'react';
import  HomeScreen from './src/screens/HomeScreen';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { rootReducer } from './src/store/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen/>
    </Provider>
  );
}
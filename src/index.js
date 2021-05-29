import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import appReducers from './reducers/index';
import { Provider } from 'react-redux'; 
import 'bootstrap/dist/css/bootstrap.min.css';  
const configureStore = (initialState) => {
  const store = createStore(
    appReducers,
    initialState
  )
  return store
}

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();

import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import './App.css';
import store from './ducks/store';

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <BrowserRouter>
          <div>{routes}</div>
        </BrowserRouter>
      // </Provider>
    );
  }
}

export default App;

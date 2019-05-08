import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './ducks/store';
import routes from './routes';
import './App.scss';
import Navbar from './Components/Navbar/Navbar'

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      <BrowserRouter>
        <div>
        {/* <Navbar/> */}
        {routes}</div>
      </BrowserRouter>
      // </Provider>
    );
  }
}

export default App;

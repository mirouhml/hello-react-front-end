import React from 'react';
import {
  HashRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Greeting from './components/Greeting';

const App = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Router>
          <Routes>
            <Route path='/' element={<Greeting />} />
          </Routes>
        </Router>
      </React.Fragment>
    </Provider>
  );
};

export default App;

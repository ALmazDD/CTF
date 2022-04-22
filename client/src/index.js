import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from './store/UserStore';
import ChallengeStore from './store/ChallengeStore';

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      challenge: new ChallengeStore(),
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById('root'),
);

import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { counterReducer, initialState } from './reducer';
import App from './App';
import 'semantic-ui-css/semantic.min.css';

const store = createStore(counterReducer, initialState);
const rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement,
);

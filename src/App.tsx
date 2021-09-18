import { VFC } from 'react';

import ColorfulBeads from './components/ColorfulBeads';
import CounterBoard from './components/CounterBoard';

import './styles.css';

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>ビーズカウンター</h1>
        <CounterBoard />
        <ColorfulBeads />
      </header>
    </div>
  );
}

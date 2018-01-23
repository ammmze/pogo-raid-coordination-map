import React from 'react';
import { render } from 'react-dom';
import Map from './components/Map/Map';
import './index.css';

const App = () => (
  <Map />
);

render(<App />, document.getElementById('root'));

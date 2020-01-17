import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Hello from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Hello />, document.getElementById('hello-buttons'));
ReactDOM.render(<Bomb />, document.getElementById('bomb'));
ReactDOM.render(<RouletteGun />, document.getElementById('gun'));
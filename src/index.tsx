import { h, render } from 'preact';
import 'preact/devtools';
import  './index.css';
import App from './modules/cart/App.js';

const root = document.getElementById('root')

if (root) {
  render(<App />, root);
}